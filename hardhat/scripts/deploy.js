const { ethers } = require("hardhat")
const fs = require('fs')

async function main(){
    const [deployer] = await ethers.getSigners()
    const Contract = await ethers.getContractFactory('Messenger')
    const Instance = await Contract.deploy()
    console.log(deployer.address)
    const abiData={
        address:Instance.address,
        abi:JSON.parse(Instance.interface.format('json'))
        
    }
    fs.writeFileSync('artifacts/abi/Messenger.json',JSON.stringify(abiData))
}
main().then(()=>process.exit(0)).catch(err=>{
    console.error(err)
    process.exit(1)})