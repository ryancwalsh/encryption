// --------------------------------------------------------------
// https://stackoverflow.com/a/55263004/

export function getBufferFromHexString(ascii: string): Uint8Array {
  const bytes = window.atob(ascii); // only works in browser
  return Uint8Array.from(bytes, (c) => c.charCodeAt(0));
}

export function getHexStringFromBuffer(buffer: Uint8Array): string {
  const binary = [];
  const bytes = new Uint8Array(buffer);
  for (let i = 0, il = bytes.byteLength; i < il; i += 1) {
    binary.push(String.fromCharCode(bytes[i]));
  }
  return window.btoa(binary.join('')); // only works in browser
}
// --------------------------------------------------------------

export function convertToHex(arrayBuffer: ArrayBuffer): string {
  // https://webbjocke.com/javascript-web-encryption-and-hashing-with-the-crypto-api/
  // https://stackoverflow.com/a/55200387/
  // https://bitcoin.stackexchange.com/a/52728/
  const uint8Array = new Uint8Array(arrayBuffer); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array represents an array of 8-bit unsigned integers
  const hexOctets = [].map.call(uint8Array, (byte: number) => {
    return `00${byte.toString(16)}`.slice(-2);
  });
  return hexOctets.join('');
}
