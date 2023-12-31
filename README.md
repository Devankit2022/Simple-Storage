## Simple Storage Contract

1. Download And Install the following tools

    - [Git](https://git-scm.com/)
    - [Node.Js](https://nodejs.org/en)
    - [Ganache](https://trufflesuite.com/ganache/)  

2. Open **Git Bash**

3. Clone the git repository using `git clone https://github.com/Devankit2022/simple-storage-ethers.git`

4. Open **Terminal**

5. Install [yarn](https://yarnpkg.com/getting-started/install)

6. Install required dependencies using `yarn init`

7. Run `yarn compile` to compile the solidity code

8. Connect to the local blockchain node using `ganache` and `ethers.js` following this [documentation](https://docs.ethers.org/v5/getting-started/#getting-started--connecting-rpc)

    -   You can also connect to node as a service provider or remote blockchain node using [Alchemy](https://www.alchemy.com/)

9. Run `node deploy.js` to deploy the contract

10. `contractFactory.deploy()` returns a `Promise`, which is when resolved, you get a `contract object`, using this, you can interact with the contract
