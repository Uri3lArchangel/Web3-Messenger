const {ethers} = require("hardhat")
const { assert, expect } = require("chai");


describe('Contract',async()=>{
    let Instance,contractAbi;
    beforeEach(async()=>{
        contractAbi = await ethers.getContractFactory('Messenger');
        Instance = await contractAbi.deploy();
        [deployer,addr1,addr2,addr3,_] = await ethers.getSigners()
    })
    describe('gets all connected accounts',()=>{
        it('should get the address of all connected addresses',async()=>{
           await Instance.connect(addr1).addAddresses()
           await Instance.addAddresses()
           let users= await Instance.getUsers()
            console.log('users',users)
            assert.notEqual(users,'')
        })
    })
})