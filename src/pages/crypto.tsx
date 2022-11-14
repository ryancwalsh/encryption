import React, { useState } from 'react';
import type { PageProps } from 'gatsby';
import { Result } from '../components/Result';

const IndexPage: React.FC<PageProps> = () => {
  const [expectedHash, setExpectedHash] = useState<string>('');
  // TODO Remove default values!!
  const [encryptedSecrets, setEncryptedSecrets] = useState<string>(
    '94120917afb093b861b62f87b5a0cc001e84f26e62e5b54b5521847068ab1e3e74965f718c8337450af3cfefdd93a810000d68d3ba990730bd029ff2a052b0f9aefa11d84c3f47',
  );
  const [secretPassPhrase, setSecretPassPhrase] = useState<string>('secret');
  const [salt, setSalt] = useState<string>('d27d6e8e1427d1c7098f2c8aeccbe198'); // must be 16 bytes but encoded as 32 hex characters (see `sodium.crypto_pwhash_SALTBYTES`).

  function onChangeExpectedHash(event: React.ChangeEvent<HTMLInputElement>): void {
    setExpectedHash(event.target.value);
  }

  function onChangeEncryptedSecrets(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setEncryptedSecrets(event.target.value);
  }

  function onChangeSecretPassPhrase(event: React.ChangeEvent<HTMLInputElement>): void {
    setSecretPassPhrase(event.target.value);
  }

  function onChangeSalt(event: React.ChangeEvent<HTMLInputElement>): void {
    setSalt(event.target.value);
  }

  return (
    <main>
      <h1>Encryption Helper</h1>
      <h2>Steps to Decrypt and Check Hash before attempting login</h2>
      <ol>
        <li>Do not start doing any of these steps until you've read ALL of them at least one time carefully beforehand.</li>
        <li>
          Find someone you trust who knows how to teach you all about Ledger hardware wallets and Ledger Live software on your computer. Have them set up a similar case (with this
          Ledger hardware wallet that is not ours) where you will be using it and learning how it works and how to log in and move funds off of it
          <ul>
            <li>
              If they are good enough at this step, you will be able to proceed with all of the following steps without their presence, which would be ideal so that they are not in
              a position to copy (steal) our seed phrase (and therefore all of the assets). But if you fully trust them and really do need their help below, that's your call.
            </li>
          </ul>
        </li>
        <li>Have a Ledger hardware wallet on hand. It doesn't have to be our original one.</li>

        <li>Search our password manager for instructions.</li>
        <li>Open this Encryption Helper page only using your own computer (not somebody else's), and be sure to use Brave Private mode.</li>
        <li>
          After you've opened this Encryption Helper page, disconnect from wifi, unplug all USB devices, and disconnect any networking cables.
          <ul>
            <li>(You want to be sure that no devices are snooping.)</li>
            <li>This Encryption Helper page will still work even when your computer is disconnected from the internet.</li>
          </ul>
        </li>

        <li>
          Paste the hash here:
          <div>
            {/* TODO Improve placeholder of hash */}
            <input
              type="text"
              placeholder="724b092810ec86d7e35c9d067702b31ef90bc43a7b598626749914d6a3e033ed"
              style={{ width: '100%' }}
              value={expectedHash}
              onChange={onChangeExpectedHash}
            />
          </div>
        </li>
        <li>
          Paste the encrypted secrets (garbled text) here:
          <div>
            <textarea rows={24} onChange={onChangeEncryptedSecrets} value={encryptedSecrets}></textarea>
          </div>
        </li>
        <li>
          Paste the salt here:
          <div>
            <input type="text" placeholder="d27d6e8e1427d1c7098f2c8aeccbe198" style={{ width: '100%' }} value={salt} onChange={onChangeSalt} />
          </div>
        </li>
        <li>
          Remember: never let anybody see this secret pass phrase or the text that is about to appear under Decrypted Result.
          <ul>
            <li>Someone having a copy of the Decrypted Result is as bad as if they now fully owned it and you no longer own it at all.</li>
            <li>Ensure that nobody else is in the room.</li>
            <li>NEVER take a photo of the results that you're about to see. Photos (especially digital ones) too easily get found, especially by bots.</li>
          </ul>
        </li>
        <li>
          Type the secret pass phrase:
          <div>
            <input type="password" placeholder="secret pass phrase" style={{ width: '100%' }} value={secretPassPhrase} onChange={onChangeSecretPassPhrase} />
          </div>
        </li>

        <li>
          Decrypted Result:
          <Result {...{ expectedHash, encryptedSecrets, secretPassPhrase, salt }} />
        </li>
      </ol>
    </main>
  );
};

export default IndexPage;

export { Head } from '../components/Head';
