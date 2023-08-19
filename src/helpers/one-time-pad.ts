import { Base32 } from '@niyari/base32-ts';

/**
// FIXNOW: Is xorStrings actually how to do a one-time pad in TypeScript? Or is this something else? 
I should use an existing encryption library even if I'm going to skip the concept of salting.
 */

const base32 = new Base32({ padding: true });

/**
 * Takes a string containing any characters (including non-alphabetic characters, such as digits, punctuation,
 * and whitespace) and encodes it such that the result contains only characters A-Z.
 */
function alphaEncode(input: string): string {
  return base32.encode(input).toString();
}

/**
 * Undoes the alphaEncode function such that `alphaDecode(alphaEncode(originalString)) === originalString`.
 */
function alphaDecode(encoded: string): string {
  return base32.decode(encoded).toString();
}

function xorStrings(a: string, b: string): string {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const bufferA = encoder.encode(a);
  const bufferB = encoder.encode(b);
  const result = new Uint8Array(bufferA.length);

  for (let i = 0; i < bufferA.length; i += 1) {
    result[i] = bufferA[i] ^ bufferB[i];
  }

  return decoder.decode(result);
}

function encrypt(plaintext: string, key: string): string {
  const encryptedString = xorStrings(plaintext, key);
  const encodedEncryptedString = alphaEncode(encryptedString);
  return encodedEncryptedString;
}

function decrypt(ciphertext: string, key: string): string {
  const decodedCiphertext = alphaDecode(ciphertext);
  const plaintextString = xorStrings(decodedCiphertext, key);
  return plaintextString;
}

export { encrypt, decrypt };
