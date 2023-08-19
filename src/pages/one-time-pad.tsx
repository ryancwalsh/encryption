import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { decrypt } from '../helpers/one-time-pad';
import '../helpers/styles.scss';

// These default values are just samples (not real values):
const sampleKey = '110_YNKNBWRKOEHXKPZJYXQWDZXGCHMTQEQWRWURQEAEKKZQGSWUMIDGXGRWURQEAEKKZQGSWSMJGMQEQUYSHECWKRGJZTQDIUMIDGXGPNAFZ_';
const sampleEncryptedString =
  'MFSGUBINDQFAUAASCECAYCQGBQMB4GYBD4KBAAIFBUORIAQ4DEIQEDIQCMAQEBICAUGAMAA4AQLBO53ENZSRWBQIAQIAMHY2AMLR2EYCBUFBWFYYD4DRQEAIBN3X4ZT4CANR4FQKCAIQIGA5BEGRWBYBAE======';

/**
 * Takes an array of BIP-39 words and returns an object with the first 4 characters of each word as the key and the full word as the value.
 */
function generateObjectFromWords(words: string[]) {
  const chunkSize = 4;
  const wordObject: { [key: string]: string } = {};

  words.forEach((word) => {
    const trimmedWord = word.trim();
    if (trimmedWord.length >= chunkSize) {
      const key = trimmedWord.slice(0, chunkSize).toUpperCase();
      wordObject[key] = trimmedWord.toUpperCase();
    }
  });

  return wordObject;
}

// https://www.gatsbyjs.com/plugins/gatsby-transformer-plaintext/
export const query = graphql`
  query {
    file(relativePath: { eq: "bip-0039_english.txt" }) {
      childPlainText {
        content
      }
    }
  }
`;

// TODO: Offer tool for checking Bip39 checksum.

function isLinePosition(chunk: string): boolean {
  return chunk.match(/^[0-9]+$/) !== null;
}

function ResultTable({ decryptedString, wordObject }: { decryptedString: string; wordObject: { [key: string]: string } }) {
  // Split the input string into 4-character chunks:
  const chunks = decryptedString.match(/.{1,4}/g) || [];
  const leftColStyle: any = { paddingRight: '1rem', textAlign: 'right' }; // Properties<string | number, string & {}>
  return (
    <>
      <table style={{ fontSize: '70%' }}>
        <thead>
          <tr>
            <th style={leftColStyle}>#</th>
            <th>Word</th>
          </tr>
        </thead>
        <tbody style={{ fontFamily: 'monospace' }}>
          {chunks.map((chunk, index) => {
            const cell =
              chunk in wordObject ? (
                <>
                  <span className="importantPart">{chunk}</span>
                  <span className="unimportantPart" style={{ color: '#ccc' }}>
                    {wordObject[chunk].substring(4)}
                  </span>
                </>
              ) : isLinePosition(chunk) ? (
                `Find the word at line ${chunk} in https://github.com/bitcoin/bips/blob/e643d247c8bc086745f3031cdee0899803edea2f/bip-0039/english.txt`
              ) : (
                '(error)'
              );
            return (
              <tr key={index}>
                <td style={leftColStyle}>{index + 1}</td>
                <td>{cell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {chunks.length < 24 && <p>ERROR: This result was supposed to have 24 words. Check the encrypted string and the key.</p>}
    </>
  );
}

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const words = data.file.childPlainText.content.split('\n');
  const wordObject = generateObjectFromWords(words);

  // These default values are just samples (not real values):
  const [key, setKey] = React.useState(sampleKey);
  const [encryptedString, setEncryptedString] = React.useState(sampleEncryptedString);
  const [decryptedString, setDecryptedString] = React.useState('');

  React.useEffect(() => {
    console.log('useEffect', { encryptedString, key });
    let result = '';
    try {
      result = decrypt(encryptedString, key);
    } catch (error) {
      console.error('error when decrypting', error);
    }
    setDecryptedString(result);
  }, [encryptedString, key]);

  const textareaStyle = { width: '100%' };

  return (
    <main>
      <h1>Encryption Helper</h1>
      <h2>Prep (carefully read this section)</h2>
      <ol>
        <li>Do not start doing any of these steps until you've read ALL of them at least one time carefully beforehand.</li>
        <li>Buy a brand new Ledger hardware wallet, even if you still own our original one. It's ideal to practice on a fresh one first.</li>
        <li>Find someone you trust who knows how to teach you all about Ledger hardware wallets and Ledger Live software on your computer.</li>
        <li>
          Have them teach you and show you and monitor you (with this fresh new Ledger hardware wallet that you're practicing on) where you will be using it and learning how it
          works and how to log in and move funds off of it.
          <ul>
            <li>
              If they are good enough at this step, you will be able to proceed with all of the following steps without their presence, which would be ideal so that they are not in
              a position to copy (steal) our seed phrase (and therefore all of the assets). But if you fully trust them and really do need their help below, that's your call.
            </li>
          </ul>
        </li>

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
          <strong>
            Remember: never let anybody see what you're about to do on this page (unless you fully trust them not to take note of these details so that they can steal our assets
            one day).
          </strong>
          <ul>
            <li>Someone having a copy of these details is as bad as if they now fully owned our crypto and you no longer own it at all.</li>
            <li>Ensure that nobody else is in the room.</li>
            <li>NEVER take a photo of the results that you're about to see. Photos (especially digital ones) too easily get found, especially by bots.</li>
          </ul>
        </li>
      </ol>
      <h2>Main steps (carefully read Prep section first)</h2>
      <ol>
        <li>
          Type the <strong>encrypted secrets (garbled text)</strong> here (replacing the demo value):
          <div>
            <textarea
              rows={2}
              style={textareaStyle}
              onChange={(event) => {
                setEncryptedString(event.target.value);
              }}
              value={encryptedString}
            ></textarea>
          </div>
        </li>
        <li>
          {/* // TODO: Instead of asking for a key, ask for answers to personal questions, and concatenate the answers together and convert to uppercase and then use a PBKDF (with lots of iterations) to create a long key. */}
          Type the <strong>key</strong> here (replacing the demo value):
          <div>
            <textarea
              rows={2}
              style={textareaStyle}
              onChange={(event) => {
                setKey(event.target.value);
              }}
              value={key}
            ></textarea>
          </div>
        </li>

        <li>
          Decrypted Result:
          {encryptedString === sampleEncryptedString && (
            <div>
              <span style={{ backgroundColor: 'yellow' }}>
                You're still using the sample inputs above, so this output is not real either (but this is where the real output will be when you start using real input values
                above):
              </span>
            </div>
          )}
          <ResultTable decryptedString={decryptedString} wordObject={wordObject} />
        </li>
      </ol>
      <p>(Characters after the first 4 of each word are unimportant, which is why they're faded.)</p>
    </main>
  );
};

export default IndexPage;

export { Head } from '../components/Head';
