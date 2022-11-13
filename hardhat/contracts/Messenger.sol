pragma solidity 0.8.17;

contract Messenger{
address[] public Users; 

function addUsers() external {
    Users.push(msg.sender);
}
function getUsers() external view returns (address[] memory){
    return Users;
}
}