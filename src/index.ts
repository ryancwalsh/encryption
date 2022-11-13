// Run via `yarn start`.

'use strict';
import sodiumHelper from './libsodium.js';
import { SlimCryptHelper } from './crypt.js';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

const KEY_HEX = process.env.KEY_HEX ?? '';
const ENCRYPTED_INPUT_STRING = process.env.ENCRYPTED_INPUT_STRING ?? '';

(async () => {
  const fullSodiumHelper = await sodiumHelper();
  const slimCryptHelper = new SlimCryptHelper(fullSodiumHelper, KEY_HEX);

  var inputStr = ENCRYPTED_INPUT_STRING;
  console.log('inputStr', inputStr);
  var garbledStr = slimCryptHelper.encrypt(inputStr);
  console.log('garbledStr', garbledStr);
  try {
    var decryptedStr = slimCryptHelper.decrypt(garbledStr);
    console.log('Recovered input string:', decryptedStr);
    console.log('Check whether the following text matches the original:', decryptedStr === inputStr);
  } catch (e) {
    console.error(e);
  }
})();
