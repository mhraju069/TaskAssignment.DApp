pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TaskToken is ERC20, Ownable, ERC20Burnable {
    event Mint(address indexed to, uint amount);

    constructor(uint totalSupply) ERC20("TaskToken", "TT") Ownable(msg.sender) {
        _mint(msg.sender, totalSupply * 10 ** decimals());
    }

    function MintToken(uint amount, address receiver) public onlyOwner {
        _mint(receiver, amount);
        emit Mint(receiver, amount);
    }
}
