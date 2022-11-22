pragma solidity 0.8.17;
import 'hardhat/console.sol';

contract Messenger{
address[] public Users; 

function addUsers() external {
    bool exists= false;
    for(uint i=0;i<Users.length;i++){
        if(Users[i] == msg.sender){
            exists = true;
        }else{
            exists=false;
        }
    }
   require(exists == false);
    Users.push(msg.sender);
    
}
function getUsers() external view returns (address[] memory){
    return Users;
     
}
}