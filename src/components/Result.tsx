import React, { useEffect, useState } from 'react';

// import { getSha256Hash } from '../helpers/crypt';
import sodiumHelper from '../helpers/libsodium';
import { SlimCryptHelper } from '../helpers/crypt';

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

  useEffect(() => {
    async function main() {
      const fullSodiumHelper = await sodiumHelper();
      try {
        const KEY_HEX = await fullSodiumHelper.deriveKey(secretPassPhrase, salt);
        const slimCryptHelperInner = new SlimCryptHelper(fullSodiumHelper, KEY_HEX);
        setSlimCryptHelper(slimCryptHelperInner);
      } catch (error) {
        setError(JSON.stringify(error));
      }
    }

    main();
  });

  let decryptedStr;
  try {
    decryptedStr = slimCryptHelper?.decrypt(encryptedSecrets) ?? '';
  } catch (error) {
    console.error(error);
    setError(JSON.stringify(error));
  }
  const hash = ''; // TODO const hash = getSha256Hash(decryptedStr);
  const isHashMatch = hash === expectedHash;
  console.log({ expectedHash, hash, isHashMatch });
  if (!isHashMatch) {
    setError('Hash does not match');
  }
  return (
    <>
      <div>{error}</div>
      <div>
        <textarea rows={24} readOnly defaultValue={decryptedStr}></textarea>
      </div>
    </>
  );
}
