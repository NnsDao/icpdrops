# Icpdrops

## Introduction

Icpdrops is an integrated airdrop platform for the IC ecosystem. After each authorized Nnsdao user can obtain different rights and interests, then participate in the airdrop within the IC ecosystem.

·Participate in the ecology to get different token airdrops

·Follow the status of new coins and airdrops in real time

### Step1

```bash
npm install or npm install --legacy-peer-deps
```

### Step2

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

### Step3

```bash
npm run dev
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.

### Error fix

+ Address already in use (os error 48)
  + sudo killall dfx replica nodemanager

+ Error: EACCES: permission denied, scandir '/Users/xxxxx/work/Dfinity-React-Typescript-tailwind2/.dfx/state/replicated_state/node-100/crypto'
  + If the dfx directory permission does not work, please set the directory permission.
  +  sudo chmod -R 777 icpdrops

# [Reference]

+ https://github.com/MioQuispe/create-ic-app

+ https://github.com/FloorLamp/dfinity-react-ts-tailwind-starter