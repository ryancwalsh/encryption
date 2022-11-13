// Run via `yarn encrypt`.

'use strict';
import sodiumHelper from './helpers/libsodium.js';
import { SlimCryptHelper } from './helpers/crypt.js';
import fs from 'fs';

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { logger } from './helpers/logging.js';

dotenv.config();

const KEY_HEX = process.env.KEY_HEX ?? '';
const plaintextTxtFilename = './secret/plaintext.txt';
const encryptedTxtFilename = './secret/encrypted.txt';

const plaintext = fs.readFileSync(plaintextTxtFilename, { encoding: 'utf8', flag: 'r' });
const encrypted = fs.readFileSync(encryptedTxtFilename, { encoding: 'utf8', flag: 'r' });

(async () => {
  const fullSodiumHelper = await sodiumHelper();
  const slimCryptHelper = new SlimCryptHelper(fullSodiumHelper, KEY_HEX);

  const encryptedString = slimCryptHelper.encrypt(plaintext);
  logger.info('encryptedString', encryptedString);

  const decryptedStr = slimCryptHelper.decrypt(encryptedString);
  if (decryptedStr === plaintext) {
    logger.success('The test of decryption worked.');
  } else {
    logger.error('The test of decryption did not work!');
  }
  const decryptedStringFromFile = slimCryptHelper.decrypt(encrypted);
  logger.info('------------------------------------------');
  logger.info(decryptedStringFromFile);
  logger.info('------------------------------------------');
  logger.warn('WARNING! Consider the security risk of console history input and output.');
})();
