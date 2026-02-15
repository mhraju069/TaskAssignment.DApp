pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TaskToken is ERC20, Ownable, ERC20Burnable {
    event Mint(address indexed to, uint amount);
    event Burn(address indexed from, uint amount);

    constructor(uint totalSupply) ERC20("TaskToken", "TT") Ownable(msg.sender) {
        _mint(msg.sender, totalSupply * 10 ** decimals());
    }

    function MintToken(uint amount, address receiver) public onlyOwner {
        _mint(receiver, amount * 10 ** decimals());
        emit Mint(receiver, amount * 10 ** decimals());
    }

    function BurnToken(uint amount) public {
        _burn(msg.sender,amount * 10 ** decimals());
        emit Burn(msg.sender,amount * 10 ** decimals());
    }

    function MyBalance() public view returns (uint) {
        return balanceOf(msg.sender);
    }
}
