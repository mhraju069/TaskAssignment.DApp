pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TaskToken is ERC20 , Ownable , ERC20Burnable {

    constructor (uint totalSupply) ERC20("TaskToken","TT") Ownable(msg.sender){
          _mint(msg.sender, totalSupply * 10 ** decimals());
    }

}