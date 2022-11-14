import React, { useState } from 'react';
import type { PageProps } from 'gatsby';
import { Result } from '../components/Result';

const IndexPage: React.FC<PageProps> = () => {
  const [expectedHash, setExpectedHash] = useState<string>('');
  const [encryptedSecrets, setEncryptedSecrets] = useState<string>(
    '6a71c00db1eb3b6ffda1ced623d2ad1b443b8552f9826ae3f8a12d9007664915b4d60d8a870976e93f187b4a41192b2d1c3675b40866ba1588eea3b3428e95d0fa6d7307cc',
  );
  const [secretPassPhrase, setSecretPassPhrase] = useState<string>('');
  const [salt, setSalt] = useState<string>('724b092810ec86d7e35c9d067702b31ef90bc43a7b598626749914d6a3e033ed'); // TODO Remove default value

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
          Type the secret pass phrase and salt here:
          <div>
            <input type="password" placeholder="secret pass phrase" style={{ width: '100%' }} value={secretPassPhrase} onChange={onChangeSecretPassPhrase} />
          </div>
          <div>
            <input type="text" placeholder="salt" style={{ width: '100%' }} value={salt} onChange={onChangeSalt} />
          </div>
        </li>
        <li>
          Result:
          <Result {...{ expectedHash, encryptedSecrets, secretPassPhrase, salt }} />
        </li>
      </ol>
    </main>
  );
};

export default IndexPage;

export { Head } from '../components/Head';
