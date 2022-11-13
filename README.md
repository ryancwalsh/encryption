# Remember

Be very careful with console input and output history. Security risk.

Also be sure to clear or delete your secret files afterward.

# Hashing and Encryption Steps

1. Generate a random hex key with `openssl rand -hex 32`.
   - It should be 64 hex characters like `724b092810ec86d7e35c9d067702b31ef90bc43a7b598626749914d6a3e033ed`.
1. Save it to Bitwarden!
1. Disconnect your network connection!
1. Set `KEY_HEX` in `.env` to that value.
1. Create `secret/plaintext.txt` with separate lines. Example:

   ```
   Line 1 Shhhh
   Secret Line 2
   ```

1. Run `yarn hash`.
1. Record that hash somewhere.
   - In the future, when testing whether you know the secret values, you'll compare against this hash first rather than waste login attempts.
1. Edit `secret/plaintext.txt` to have certain values replaced with secret personalized prompts that only I could know the answer to.
   - Word the prompts such that I will definitely know which of the 2048 words at https://github.com/bitcoin/bips/blob/15c8203eb36304efa1e4588b950f62a5bb32f965/bip-0039/english.txt is the answer, but other people will not.
1. Run `yarn encrypt`.
1. Delete all sensitive file contents (`.env` and in the `secret` folder) and terminal logs.

# Steps to Decrypt and Check Hash before attempting login

1. Set `KEY_HEX` in `.env` to the value from Bitwarden.
1. Disconnect your network connection!
1. Create `secret/encrypted.txt`. Example:

   ```
   6a71c00db1eb3b6ffda1ced623d2ad1b443b8552f9826ae3f8a12d9007664915b4d60d8a870976e93f187b4a41192b2d1c3675b40866ba1588eea3b3428e95d0fa6d7307cc
   ```

1. Run `yarn encrypt`. (Currently, this file handle decryption, too.)
1. Copy the output into `secret/plaintext.txt`.
1. Change the appropriate values in `secret/plaintext.txt` to answer the secret personalized prompts that only I could know the answer to.
1. Run `yarn hash`.
1. Compare the output to the hash you recorded earlier. Hopefully they match! If they don't, do not try to login because you will waste the few attempts that are allowed.
   - https://support.ledger.com/hc/en-us/articles/360007223753-Recovery-Check?docs=true
1. Delete all sensitive file contents (`.env` and in the `secret` folder) and terminal logs.
