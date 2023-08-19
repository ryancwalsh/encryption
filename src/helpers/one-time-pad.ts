/**
// FIXNOW: Is this actually how to do a one-time pad in TypeScript? Or is this something else?
 */

function xorStrings(a: string, b: string): string {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const bufferA = encoder.encode(a);
  const bufferB = encoder.encode(b);
  const result = new Uint8Array(bufferA.length);

  for (let i = 0; i < bufferA.length; i++) {
    result[i] = bufferA[i] ^ bufferB[i];
  }

  return decoder.decode(result);
}

export function encrypt(plaintext: string, key: string): string {
  const encrypted = xorStrings(plaintext, key);
  const base64Encoded = btoa(encrypted);
  return base64Encoded;
}

export function decrypt(ciphertext: string, key: string): string {
  const decodedCiphertext = atob(ciphertext);
  const decrypted = xorStrings(decodedCiphertext, key);
  return decrypted;
}
