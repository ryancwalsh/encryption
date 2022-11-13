import { SodiumHelper } from './libsodium';
import { convertToHex } from './string.js';

export class SlimCryptHelper {
  sodiumHelper: SodiumHelper;

  defaultKeyAsHex: string; // 64-character string containing only valid hex characters (32 bytes). See https://generate.plus/en/hex

  constructor(sodiumHelper: SodiumHelper, defaultKeyAsHex: string) {
    this.sodiumHelper = sodiumHelper;
    this.defaultKeyAsHex = defaultKeyAsHex;
  }

  encrypt(message: string): string {
    return this.sodiumHelper.encryptUsingKeyAsHex(message, this.defaultKeyAsHex);
  }

  decrypt(nonceAndCiphertextStr: string): string {
    return this.sodiumHelper.decryptUsingKeyAsHex(nonceAndCiphertextStr, this.defaultKeyAsHex);
  }
}

/**
 * hash a string using algorithm such as `hashAsync('SHA-256', tagLabelDecrypted)`
 */
export async function hashAsync(algo: string, str: string): Promise<string> {
  // https://stackoverflow.com/a/55926440/
  const textEncoder = new TextEncoder(); // https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/TextEncoder
  const utf8EncodedStr = textEncoder.encode(str);
  // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
  return crypto.subtle.digest(algo, utf8EncodedStr).then((arrayBuffer) => {
    return convertToHex(arrayBuffer);
  });
}
