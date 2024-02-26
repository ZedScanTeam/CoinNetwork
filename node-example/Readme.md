# Run a ZEDXION Validator
## Setting up a node
1. Git clone https://github.com/Zedscan/CoinNetwork.git

2. Copy source form node-example to root folder
```
cp -r CoinNetwork/node-example/ZEDXION  /root/
```
3. Create an Account

```
cd /root/ZEDXION
chmod +x openethereum
./openethereum account new --config nodes/validator/node.toml
```
Returned address like that 0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2

Copy result address to mode.toml
Ex:
```
...
[account]
unlock = ["0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2"]
password = ["password"]

[mining]
force_sealing = true
engine_signer = "0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2"
reseal_on_txs = "none"
...
```
4. Run the authority nodes
```
./openethereum --config ./nodes/validator/node.toml

```
5. Stake

    Stake

    To stake ZEDXION coin, all you should do is sending your ZEDXION coin to the ZEDXION Consensus contract address over the ZEDXION network from the validator address.
    The ZEDXION Consensus contract address: 0xf39f8f3223aDB78F87836eeD365ca858D876873a
    The easiest way to do so, is to import your private key or key-store file to your favourite wallet (for example Metamask), switch network to ZEDXION and send the ZEDXION coin to the Consensus contract address.

    You can find your key-store (containing your private key) and the password for the created account in:
    /ZEDXION/nodes/validator/keys/ZEDXION/UTC--xxxx
    /ZEDXION/nodes/validator/node.pwd

6. Wait for 1 cycle (approximately 48 hours).

    Wait until the next cycle gets started.
