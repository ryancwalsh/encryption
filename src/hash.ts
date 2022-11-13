// Run via `yarn hash`.

'use strict';

import { getSha256Hash } from './helpers/crypt.js';
import fs from 'fs';

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

const plaintextTxtFilename = './secret/plaintext.txt';
const plaintext = fs.readFileSync(plaintextTxtFilename, { encoding: 'utf8', flag: 'r' });

const hash = getSha256Hash(plaintext);
console.log({ hash });
console.error('WARNING! Consider the security risk of console history input and output.');
