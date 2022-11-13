// Run via `yarn start`.

'use strict';
import sodiumHelper from './libsodium.js';
import { SlimCryptHelper } from './crypt.js';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

const KEY_HEX = process.env.KEY_HEX ?? '';
const ENCRYPTED = process.env.ENCRYPTED ?? '';
const PLAINTEXT = process.env.PLAINTEXT ?? '';

(async () => {
  const fullSodiumHelper = await sodiumHelper();
  const slimCryptHelper = new SlimCryptHelper(fullSodiumHelper, KEY_HEX);

  const plaintextStringFromFile = PLAINTEXT;
  console.log('plaintextStringFromFile', plaintextStringFromFile);
  const encryptedString = slimCryptHelper.encrypt(plaintextStringFromFile);
  console.log('encryptedString', encryptedString);
  try {
    const decryptedStr = slimCryptHelper.decrypt(encryptedString);
    console.log('Recovered input string:', decryptedStr);
    console.log('Check whether the following text matches the original:', decryptedStr === plaintextStringFromFile);
    const decryptedStringFromFile = slimCryptHelper.decrypt(ENCRYPTED);
    console.log({ decryptedStringFromFile, ENCRYPTED });
    console.error('WARNING! Consider the security risk of console history input and output.');
  } catch (error) {
    console.error(error);
  }
})();
