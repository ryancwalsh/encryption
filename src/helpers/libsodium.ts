// ONEDAY consider replacing with https://github.com/paragonie/sodium-plus#using-sodium-plus-in-your-projects
import '@babel/register'; // https://stackoverflow.com/a/33527883/
import 'babel-polyfill';
import _sodium from 'libsodium-wrappers'; // https://github.com/paragonie/libsodium.js#api
import { getBufferFromHexString, getHexStringFromBuffer } from './string';

export type SodiumHelper = {
  encryptUsingKeyAsHex: (message: string, keyAsHex: string) => string;
  decryptUsingKeyAsHex: (nonceAndCiphertextStr: string, keyAsHex: string) => string;
  deriveKey: (passwordPlainText: string, salt: string) => Promise<string>;
};

function mergeTypedArrays(a: Uint8Array, b: Uint8Array): Uint8Array {
  // https://stackoverflow.com/a/55200387/
  const c = new Uint8Array(a.length + b.length);
  c.set(a, 0);
  c.set(b, a.length);
  return c;
}

// eslint-disable-next-line max-lines-per-function
export default async function sodiumHelper(): Promise<SodiumHelper> {
  await _sodium.ready;

  // https://github.com/jedisct1/libsodium.js
  const sodium = _sodium;
  console.log('libsodium-wrappers is ready');

  const nonceBytes = sodium.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES;
  const OPSLIMIT_INTERACTIVE = 4;
  const MEMLIMIT_INTERACTIVE = 33554432;

  function getRandomInt(min: number, max: number): number {
    // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // const minCeil = Math.ceil(min);
    // const maxFloor = Math.floor(max);
    // return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil; // The maximum is exclusive and the minimum is inclusive
    // TODO: Check that this is correct.
    return (sodium.randombytes_random() % (max - min)) + min;
  }

  function getMessageWithRandomPadding(message: string): string {
    const padLength = getRandomInt(15, 30);
    const padChar = ' '; // Must be removable with trim()
    const paddedMsg = message.padEnd(padLength, padChar); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
    return paddedMsg;
  }

  function encryptAndPrependNonce(message: string, key: Uint8Array): Uint8Array {
    const nonce = sodium.randombytes_buf(nonceBytes); // ONEDAY: Change so that it only uses random nonce if nonce is not provided.
    const encrypted = sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(message, nonce, nonce, nonce, key); // TODO: Check whether this is correct, and document why `nonce` is used this way.

    const nonceAndCiphertext = mergeTypedArrays(nonce, encrypted);
    return nonceAndCiphertext;
  }

  function decryptAfterExtractingNonce(nonceAndCiphertext: Uint8Array, key: Uint8Array): string {
    const nonce = nonceAndCiphertext.slice(0, nonceBytes); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice
    const ciphertext = nonceAndCiphertext.slice(nonceBytes);
    const message = sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(nonce, ciphertext, nonce, nonce, key, 'text'); // TODO: Check whether this is correct, and document why `nonce` is used this way.
    return message;
  }

  const exportsSelf: SodiumHelper = {
    encryptUsingKeyAsHex(message: string, keyAsHex: string): string {
      const key = sodium.from_hex(keyAsHex);
      const paddedMsg = getMessageWithRandomPadding(message);
      const uint8ArrayMsg = encryptAndPrependNonce(paddedMsg, key);
      const ascii = getHexStringFromBuffer(uint8ArrayMsg); // returns ASCII string of garbled text
      return ascii;
    },

    /**
     *
     * @param nonceAndCiphertextStr
     * @param keyAsHex 64-character string containing only valid hex characters (32 bytes). See https://generate.plus/en/hex
     */
    decryptUsingKeyAsHex(nonceAndCiphertextStr: string, keyAsHex: string): string {
      if (nonceAndCiphertextStr) {
        const key = sodium.from_hex(keyAsHex);
        const nonceAndCiphertext = getBufferFromHexString(nonceAndCiphertextStr); // converts ASCII string of garbled text into binary
        const msgWithPadding = decryptAfterExtractingNonce(nonceAndCiphertext, key);
        const msg = msgWithPadding.trim();
        return msg;
      } else {
        return '';
      }
    },

    async deriveKey(passwordPlainText: string, salt: string): Promise<string> {
      // Similar to https://github.com/paragonie/sodium-plus/blob/master/docs/SodiumPlus/password-based-key-derivation.md#example-for-crypto_pwhash
      // console.log('crypto_pwhash_SALTBYTES', sodium.crypto_pwhash_SALTBYTES);
      const saltArray = getBufferFromHexString(salt); //const saltArray = await sodium.randombytes_buf(16);
      // const saltHex = getHexStringFromBuffer(saltArray);
      // console.log({ saltArray, saltHex });

      const derivedKey = sodium.crypto_pwhash(
        sodium.crypto_aead_xchacha20poly1305_IETF_KEYBYTES,
        passwordPlainText,
        saltArray,
        OPSLIMIT_INTERACTIVE,
        MEMLIMIT_INTERACTIVE,
        sodium.crypto_pwhash_ALG_ARGON2ID13,
      );
      const hexString = getHexStringFromBuffer(derivedKey);

      return hexString;
    },
  };

  return exportsSelf;
}
