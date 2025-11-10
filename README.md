
# BaseToken 🪙

Verified ERC20-compatible token deployed on **Base Mainnet**.

- Fixed supply: 10,000,000,000,000 units
- Deployment: October 2025 by **@Igorehadem**

## Verification & metadata

The canonical source for deployment metadata (contract address, compiler settings, license, explorer links, etc.) is [`verification.json`](./verification.json). Update that file first and keep this README as a high-level overview.

Recent deployment history and verification notes live in [`CHANGELOG.md`](./CHANGELOG.md).

## Related projects

- [Farcaster Bot Core](https://github.com/Igorehadem/farcaster-bot-core)
- [Base Node (fork)](https://github.com/Igorehadem/node)

---

## Local development & testing

### Installation

```bash
npm install
```

### Compile contracts

```bash
npx hardhat compile
```

### Run tests

```bash
npx hardhat test
```

### Deploy manually

```bash
npx hardhat run scripts/deploy.js --network base
```

---

## Folder structure

```
├── BaseToken.sol          # Solidity contract
├── test/                  # Unit tests (Chai / Mocha)
├── scripts/               # Deployment scripts
├── verification.json      # Onchain verification metadata
└── hardhat.config.js      # Compiler and network configuration
```
