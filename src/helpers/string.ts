// --------------------------------------------------------------
// https://stackoverflow.com/a/55263004/

export function getBufferFromHexString(ascii: string): Uint8Array {
  // TODO: Check this Copilot code.
  const hex = ascii.replace(/[^0-9a-f]/gi, '');
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes;
}

export function getHexStringFromBuffer(buffer: Uint8Array): string {
  // TODO: Check this Copilot code.
  const hex = Array.from(buffer)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
  return hex;
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
