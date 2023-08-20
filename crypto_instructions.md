# Every few months, it's important to read at least this sentence:

**These instructions for accessing our cryptocurrencies (written 2023-08-13 and currently valued at >$13k USD) are saved to [this recurring Google Calendar reminder](https://calendar.google.com/calendar/u/0/r/eventedit/MW9oM2V2NzMzMnBkNjQ2bDZucDRkcWd2bDdfMjAyMzA4MjBUMTQwMDAwWiByY3dhbHNoQG0), and printed copies exist in our safe at Softwood and in Jim's safe deposit box.**

If you can remember that, then even if Softwood burns down and even if we lose access to our Google account and Google Calendar, you can still access the crypto.

(By the way, this document is written in a text language called Markdown. So if you open this text in a Markdown reader such as https://stackedit.io/app or https://www.zettlr.com, it will be formatted nicer.)

---

# How crypto custody works

I'll explain 4 different approaches to custody of financial assets, first starting with how non-crypto financial assets work.

- Approach 1. Imagine a world where (or a time when) there are no banks or other financial companies. All that exists is physical paper cash denominated in USD.

  - Benefits: it’s very simple. Ownership = whoever holds the cash.
  - Drawbacks:
    - Transactions require meeting in person and physically handing over the cash.
    - You also risk having your cash destroyed by accident or stolen.

- Approach 2. (Not pretending anymore.) Financial institutions like banks exist.

  - Benefits: you can make financial transactions remotely, and you don’t need to be vigilant in taking care of physical paper cash, because banks specialize in doing that for you.

  - Drawbacks:
    - When you "store" assets with an institution (e.g. Vanguard or CapitalOne), you're _trusting_ that institution.
    - You're agreeing to interact with them only during their business hours.
    - You _hope_ that they act in your best interest.
    - In reality, they can do annoying things like charge you fees (even when you're trying to withdraw your funds and close your account!).
    - Even worse, they could be irresponsible and lose the assets themselves.
    - The decisions of the CEO of that company really matter. There is a lot of centralized power.

- Approach 3. Cryptocurrencies (first invented in 2009) combine the benefits of both of the above approaches.
  - Benefits:
    - You can make financial transactions remotely.
    - You’re able to create “backups” of your crypto so that you’re protected from accidents like a fire destroying the original copy.
    - As in Approach 1, there is no reliance on any companies. Cryptocurrencies each rely on open-source code and their own peer-to-peer network of people like you.
  - Drawbacks:
    - It’s complicated to understand. The complexity then leads to risk of loss via theft or loss via forgetting seed phrases (to be explained later).
    - Not a lot of businesses accept payments in cryptocurrency yet. Until that becomes more common, "spending" your cryptocurrency involves first trading it for a more common currency like USD. (Proponents of cryptocurrencies assume that this drawback _isn't permanent_ and that eventually every business will support crypto transactions.)
- Approach 4. Companies like Coinbase and Binance (founded in 2012 and 2017) got created to offer accounts of "custodial wallets" (see Terminology below).
  - Benefits and drawbacks are the same as in Approach 2 with banks. Plus a benefit of being able to participate in the world of cryptocurrencies but with less complexity.

So, you’ll notice that Approach 3 was where you hold your own crypto yourself (in "non-custodial wallets", as described below), and Approach 4 is where companies offer to manage your crypto _for you_ in "custodial wallets".

The popular saying "not your keys, not your crypto" is a reminder that the whole point of crypto is that you can own an asset _without_ relying on any specific company.

It’s a recommendation _not_ to use custodial companies like Coinbase (for anything other than small amounts or when converting between currencies and then moving those assets to your own non-custodial wallet).

Scandals like with Sam Bankman-Fried of [FTX](https://en.wikipedia.org/wiki/FTX#November_2022_crisis_and_bankruptcy) show how custodial wallets are subject to fraud.

Many experts would recommend Approach 3 instead of Approach 4.

## Terminology

**account:** In most cases, this is sort of a synonym for custodial wallet. You might have a Coinbase “account” or an account at another similar company that offers a custodial wallet. But if you’re taking the non-custodial approach mentioned in Approach 2 above, there is no such thing as accounts. (Similarly, in Approach 1, there was no such thing as accounts.)

**ledger (lowercase)**: A log of all transactions. In the case of cryptocurrencies, this is publicly viewable on the internet by everyone. Examples for [Bitcoin](https://blockstream.info/tx/recent), [Ethereum](https://etherscan.io/txs), [NEAR](https://explorer.near.org/), and [others](https://www.ledger.com/academy/how-to-read-a-blockchains-transaction-history).

**Ledger (capitalized)**: It’s annoying and confusing that this company has this name rather than something unique, but [https://www.ledger.com](https://www.ledger.com) is a company that offers hardware wallets. See below about wallets.

**custodial wallet:** When you have an account at an institution like Coinbase. You never truly have full control over your crypto. Coinbase doesn't expose the private key or seed phrase to you. Sort of like how a bank that keeps your cash in a vault doesn't give you the keys to the vault. So you're _trusting_ the institution to give your assets back to you when you ask.

**software wallet:** Synonym for "non-custodial wallet" or "self-custody wallet".

**non-custodial wallet (‘software wallet’, ‘wallet’):** In what I called Approach 3, there is no such thing as an “account”. There are just wallets of digital cash (i.e. crypto). A wallet is kind of like a secret digital folder of files. But instead of files, inside is digital cash. One popular software wallet is MetaMask. But don't use software wallets. Only use a hardware wallet like a Ledger (which has its own protected software wallets inside).

**hardware wallet:** Companies like Ledger and Trezor build hardware devices with which you can easily manage a huge number of non-custodial wallets in a safe way (such as with an easy-to-remember PIN). For simplicity (and since it's basically true for us), assume that you would own 1 hardware wallet which contains 1 non-custodial wallet per cryptocurrency that you care about. E.g. our Ledger hardware wallet contains 1 wallet for Bitcoin, 1 for Ethereum, 1 for NEAR, etc.

**public key:** The digital mailing address of your software wallet. I will call this the "address". Someone needs to know this address in order to send you crypto. You should share this publicly so that people can transfer you funds. (Weirdly, [NEAR](https://near.org/use/set-up-account) uses the word "account" to refer to this concept, so they're an exception to the terminology rule I stated above about "accounts" referring to only custodial wallets.) On public ledgers of cryptocurrencies (published to the internet for everyone to see), everyone can see every since transaction between any address and any other address. They can therefore also see the full contents (i.e. value) of each wallet.

**private key:** Although it’s different from a seed phrase, the difference isn’t important. So for the sake of this discussion, ignore the concept of private keys, and instead focus on the definition for “seed phrase”, which is very important.

**recovery phrase:** Synonym for seed phrase.

**seed phrase:** When you set up a hardware wallet, you get a random 24-word seed phrase, which is like a secret key with which an owner controls their crypto. See **Important** section below!!

You should write a second copy of the hardware wallet's 24-word seed phrase (as a backup) but be extra careful to keep the original copy and the backups private. (Side note: [Cryptosteel](https://cryptosteel.com/) is another cool way to store a seed phrase, but I haven't done it.)

You can think of your non-custodial wallet as a transparent lockbox with a hole in the top that allows people to deposit funds _into_ the lockbox (as long as they know its address). But _only you_ are allowed to open the lockbox to retrieve what's inside because only you know the seed phrase.

> Nerdy side notes: Most (if not all) cryptocurrencies use an approach defined by Bitcoin (the first cryptocurrency) in a standard that the Bitcoin community calls BIP-39. [BIP-39 is defined in the official bitcoin code repository.](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) > [These are the 2,048 possible words](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) that each 24-word seed phrase is comprised of (and order matters). 24 to the power of 2,048 is such an astronomically large number that nobody will ever be able to guess or brute-force "crack" your seed phrase.
> Unless maybe quantum computers get good at this someday, the only way anyone will ever discover your seed phrase is if they see your handwritten note.
> Also, only the first 4 letters of each word matter. The remaining letters in each word are irrelevant in the cryptography.
> When you're first setting up a hardware wallet, it randomly generates a secret key of a long series of bits (zeroes and ones), which it then translates into a 24-word seed phrase (just to make it human-readable). This seed phrase (and the PIN mentioned below, which is a shortcut) is the most important thing for you to keep private and never lose.
> When you type in your seed phrase, it translates back into a secret key. From this secret key, for as many different cryptocurrencies as you want, your hardware wallet can create (on your behalf) _other_ secret keys to control the internal software wallet for that cryptocurrency. Because you're using a hardware wallet, you never need to write down the seed phrases of any of those inner software wallets.
> The "public key" (address) of any software wallet can be derived from its private key (but not the reverse). To repeat: your hardware wallet secret key = hardware wallet seed phrase, and from that are derived the seed phrases of any software wallets inside, and from each of those seed phrases / secret keys are derived the addresses (public keys), which you should give to people when you want to allow them to send you assets.

**PIN:** Hardware wallets such as the Ledger Nano X allow you to set an 8-character PIN which is easy to remember and lets you access your non-custodial wallet for each of your cryptocurrencies (i.e. open the lockbox without needing to type in the full 24-word seed phrase).

## **IMPORTANT**

**The seed phrase is the most important concept in crypto.**

Be careful to keep the seed phrase private (don't share it with anyone).

Whoever knows the seed phrase has full control over the crypto and could move it to an undisclosed location, stealing it from you.

The seed phrase should only ever exist in written form. Never type it onto a computer or any other device other than a hardware wallet (since hackers have written viruses to try to scrape seed phrases from your keyboard or hard drive). Never take a digital photo of a seed phrase (for the same reason).

## Recap

- The more serious you are about crypto, the less you'll want to trust institutions to manage your crypto "keys" for you, so you'll want to have your own **non-custodial wallets**, preferably contained within a **hardware wallet** like a **Ledger Nano X**.
- An 8-character **PIN** is a shortcut way of controlling one or more **non-custodial wallets** of crypto without needing to type in a full 24-word **seed phrase**.
- Keep your hardware wallet seed phrase (and backups) and PIN **extremely private**.
- The worst things to misplace or to let fall into the hands of adversaries are:
  1.  the seed phrase
  2.  physical possession of the hardware wallet + its PIN (if they get both, it's the equivalent of them discovering your seed phrase)

---

# Scenarios

For any scenario where Ryan is unavailable, consider getting help from a family member or friend who is very tech-savvy _and_ is someone you'd trust both not to steal our crypto and to be careful with all of the secrets involved.

For extra assurance (and so that you have a record of what you're all doing during this stressful time and won't need to rely only on your memory), ensure that there is a screen recording capturing their activity and that you're also recording with a handheld camera (e.g. your phone) so that you can capture from another perspective, including what they do on the hardware device (but maybe cover the lens whenever they're typing something sensitive into the hardware device such as a PIN or seed phrase).

## Scenario 1 (Ryan is available)

Ryan will use his Ubuntu laptop to open the Ledger Live app, plug in the Ledger USB device, and type the PIN into the device. See the "Ledger" note in Ryan's shared Bitwarden, which mentions a hint for the PIN.
TODO: Create a better hint.
TODO: Save https://calendar.google.com/calendar/u/0/r/eventedit/MW9oM2V2NzMzMnBkNjQ2bDZucDRkcWd2bDdfMjAyMzA4MjBUMTQwMDAwWiByY3dhbHNoQG0 link to shared Bitwarden hint.

## Scenario 2 (Ryan is available but forgets the PIN)

Ryan will use the handwritten 24-word seed phrase written on a card stored in the Softwood safe.

## Scenario 3 (Ryan is unavailable but you still have our Ledger hardware wallet)

See the "Ledger" note in Ryan's shared Bitwarden, which mentions a hint for the PIN. If you think you can figure it out, continue. Otherwise, read the directions about retrieving the seed phrase.

- If you can log into Ryan's Ubuntu laptop
  - Open the Terminal.
  - Open the Ledger Live app by running this command (without the backticks): `~/ledger_live/ledger-live-desktop-*.AppImage`
    - By the way, you can do this much (and see the USD value of our assets) all without needing to know the PIN or seed phrase.
- Otherwise:
  - Only do this on your own computer or on the computer of someone you trust not to steal the crypto (NOT on a public computer): Find some way to open a fresh copy of a Ledger Live app.

Plug in the Ledger USB device, and type the PIN into the device.

## Scenario 4 (Ryan and our Ledger hardware wallet are both unavailable)

### If our Ledger hardware wallet was destroyed

No worries. Buy a new one. Continue with the steps of Scenario 3, skipping anything that mentions using Ryan's PIN, which would not exist on a fresh new Ledger. You'll still be able to access our crypto as long as you still know the 24-word seed phase.

### If our Ledger hardware wallet got misplaced

This is similar to the "destroyed" case above. However, since there is a chance that a stranger might find the hardware wallet, it's not great that they're only an 8-character PIN away from being able to control it.

So, as soon as you can, you'll want to:

1. Buy a new hardware wallet.
2. Set a totally different PIN for it.
3. Use the seed phrase to "restore" all of our crypto onto it.
4. For each non-custodial wallet on there (which is probably just 1 for Bitcoin, 1 for Ethereum, etc), you'll want to create a _new_ non-custodial wallet for that same cryptocurrency and make a transfer of all assets from the old wallet to the new one. This way, even if a stranger finds your old hardware wallet _and_ somehow guesses the 8-character PIN, they'll then see only empty wallets. They won't have access to the new wallets that you've moved the funds to.

# Useful links

- https://www.ledger.com/academy/bip-39-the-low-key-guardian-of-your-crypto-freedom
- https://www.ledger.com/academy
- https://www.blockplate.com/pages/first-4-letters-of-a-bip39-mnemonic-seed-phrase

# Retrieving the seed phrase for our Ledger hardware wallet

## Prep (carefully read this section)

1.  Do not start doing any of these steps until you've read ALL of them at least one time carefully beforehand.
2.  Buy a brand new Ledger hardware wallet, even if you still own our original one. It's ideal to practice on a fresh one first.
3.  Find someone you trust who knows how to teach you all about Ledger hardware wallets and Ledger Live software on your computer.
4.  Have them teach you and show you and monitor you (with this fresh new Ledger hardware wallet that you're practicing on) where you will be using it and learning how it works and how to log in and move funds off of it.
    - If they are good enough at this step, you will be able to proceed with all of the following steps without their presence, which would be ideal so that they are not in a position to copy (steal) our seed phrase (and therefore all of the assets). But if you fully trust them and really do need their help below, that's your call.
5.  Search our password manager for instructions.
6.  Disconnect from wifi, unplug all USB devices, and disconnect any networking cables.
    - (You want to be sure that no devices are snooping.)
7.  Remember: never let anybody see what you're about to do (unless you fully trust them not to take note of these details so that they can steal our assets one day).
    - Someone having a copy of these details is as bad as if they now fully owned our crypto and you no longer own it at all.
    - Ensure that nobody else is in the room.
    - NEVER take a photo of the results that you're about to see. Photos (especially digital ones) too easily get found, especially by bots.

## Decrypting our seed phrase

1. Remember to unplug ethernet and totally disable wifi until after you've finished this entire process.
2. Open the Terminal app on an Ubuntu computer (MacOs might work too).
3. Paste in the following commands:

```bash
cd ~
mkdir crypto_recovery
cd crypto_recovery
touch answers.txt
```

4. Open the file `answers.txt` in a text editor.
5. Type the answers to the questions below, one answer per line. Save the file.

   - We arrived at PVB and sat in the Adirondacks in time to see what dad misread as a **\_\_\_\_\_\_**
   - Morely **\_\_\_\_\_\_**
   - Prioritize **\_\_\_\_\_\_**

6. Paste the following commands into your terminal:

TODO: Figure out how to remove newlines from encryptedMessage.txt.

```bash
echo "TODO_OUR_ACTUAL_ENCRYPTED_MESSAGE" > encryptedMessage.txt
passphrase=$(tr -d '\n' < answers.txt | tr '[:lower:]' '[:upper:]')
base32 -d encryptedMessage.txt | \
 openssl enc -aes-256-cbc -base64 -pass pass:"$passphrase" -iter 100000000 -d > delete_this_file_ASAP.txt
```

7. Now go read `delete_this_file_ASAP.txt`. Some words have been intentionally ommitted from the result, and in their place are numbers. For those lines, use the corresponding word based on the line number in the BIP-39 English standard shown at https://github.com/bitcoin/bips/blob/e643d247c8bc086745f3031cdee0899803edea2f/bip-0039/english.txt. Now you know our seed phrase! 🎉
8. Delete that file as soon as you can. Be sure to delete the file from your trash too. Do this all before you ever connect this computer to the internet again.

### What those commands do:

1. Create a file called encryptedMessage.txt, writing our encrypted seed phrase to it.

2. Read the contents of the file named `answers.txt`, removing any newline characters from the text, and converting all lowercase characters to uppercase. The result is stored in the variable `passphrase`.

3. Decode the contents of the `encryptedMessage.txt` file using Base32 encoding.

4. The decoded (but not yet decrypted) data from step 3 is then passed through the `openssl` command to decrypt it. The decryption is performed using the AES-256-CBC cipher mode. AES (Advanced Encryption Standard) is a widely used encryption algorithm. CBC (Cipher Block Chaining) is a mode of operation for block ciphers. The `-base64` flag indicates that the input data must also have been encoded in base64 format (in addition to the base32 encoding).

5. The decryption key is provided using the `-pass` option along with the `pass:"$passphrase"` argument. This is where the passphrase generated in step 2 is used as the decryption key. The `-iter` flag specifies the number of iterations for the key derivation function. In this case, it's set to 10,000,000 iterations.

In summary, this script takes an encrypted message encoded in Base32, decrypts it using the AES-256-CBC cipher with a passphrase derived from the contents of `answers.txt`, and outputs the decrypted result. The script seems to prioritize security by using a strong encryption algorithm (AES-256-CBC) and performing a significant number of iterations during key derivation. The passphrase for decryption is obtained from `answers.txt` after removing newlines and converting to uppercase.

### Commands I used to encrypt the seed phrase:

```bash
passphrase=$(tr -d '\n' < answers.txt | tr '[:lower:]' '[:upper:]')
# Using a fake seed phrase as an example:
echo "PUZZTRADBECOCONTSNAKFLAVAWESATTESHADSUPPTIGEWOLF0790VOLCHAMMVELVCHAPMIXTOCEA0379ANGEBURSSONGASPE" | \
 openssl enc -aes-256-cbc -base64 -pass pass:"$passphrase" -iter 100000000 | \
 base32 > encryptedMessage.txt
```
