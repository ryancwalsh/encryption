import React, { useEffect, useState } from 'react';

// import { getSha256Hash } from '../helpers/crypt';
import sodiumHelper from '../helpers/libsodium';
import { SlimCryptHelper } from '../helpers/crypt';

const errorMsg = 'Please enter the correct salt and secret pass phrase.';

export function Result({
  expectedHash,
  encryptedSecrets,
  secretPassPhrase,
  salt,
}: {
  expectedHash: string;
  encryptedSecrets: string;
  secretPassPhrase: string;
  salt: string;
}): JSX.Element {
  const [slimCryptHelper, setSlimCryptHelper] = useState<SlimCryptHelper>();
  const [error, setError] = useState<string>('');
  const [decryptedStr, setDecryptedStr] = useState<string>('');

  useEffect(() => {
    async function main() {
      const fullSodiumHelper = await sodiumHelper();
      try {
        //fullSodiumHelper.encryptUsingKeyAsHex;
        //const KEY_HEX = '724b092810ec86d7e35c9d067702b31ef90bc43a7b598626749914d6a3e033ed';
        const KEY_HEX = await fullSodiumHelper.deriveKey(secretPassPhrase, salt);
        const slimCryptHelperInner = new SlimCryptHelper(fullSodiumHelper, KEY_HEX);
        const temp = slimCryptHelperInner.encrypt('Pretend this is a secret!\nShhh!'); // TODO Remove
        console.log('temp', temp); // TODO
        setSlimCryptHelper(slimCryptHelperInner);
      } catch (error) {
        setError(errorMsg);
        console.error(error);
      }
    }

    main();
  }, [secretPassPhrase, salt]);

  useEffect(() => {
    try {
      console.log(slimCryptHelper?.encrypt('Shhhh pretend this is a secret')); // TODO Remove
      const decryptedStrInner = slimCryptHelper?.decrypt(encryptedSecrets) ?? '';
      setDecryptedStr(decryptedStrInner);
    } catch (error) {
      console.error('Error when decrypting.', error);
      setError(errorMsg);
    }
    const hash = ''; // TODO const hash = getSha256Hash(decryptedStr);
    const isHashMatch = hash === expectedHash;
    console.log({ expectedHash, hash, isHashMatch });
    if (!expectedHash) {
      setError('Please paste the expected hash.');
    } else if (!isHashMatch && !error) {
      setError('Hash does not match!');
    }
  }, [slimCryptHelper, expectedHash]);

  return (
    <>
      <div>{error}</div>
      <div>
        <textarea rows={24} readOnly defaultValue={decryptedStr}></textarea>
      </div>
    </>
  );
}
