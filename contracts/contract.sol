pragma solidity ^0.4.0;

//removed is mortal, doesnt so you cant cancel it.

//allows the maker of contract to remove it
contract MyToken {

   /* This creates an array with all balances */
   mapping (address => uint256) public balanceOf;
   string public artistName;
   string public titleOfWork;
   string public description;
   string public suggestedPrice;
   string public linkToPieces;
   string public comments;
   address public artistAddress;



   /* Initializes contract with initial supply tokens to the creator of the contract */
   function MyToken(
       uint256 _initialShares,
       string _artistName,
       string _titleOfWork,
       string _description,
       string _suggestedPrice,
       string _linkToPieces,
       string _comments,
       address _artistAddress
       ) {
     
       balanceOf[msg.sender] = _initialShares;              // Allows artist to set shares for art
       artistName = _artistName;                           // Artist name
       artistAddress = _artistAddress;                     // contract attached to artists unique address
       titleOfWork = _titleOfWork;
       description = _description;                         // Description of art
       suggestedPrice = _suggestedPrice;  
       linkToPieces = _linkToPieces;
       comments = _comments;
     
   }


   /* Send ownership of art whenever you want */
   function transfer(address _to, uint256 _value) {
       if (balanceOf[msg.sender] < _value) throw;           // Check if the sender has enough
       if (balanceOf[_to] + _value < balanceOf[_to]) throw; // Check for overflows
       balanceOf[msg.sender] -= _value;                     // Subtract from the sender
       balanceOf[_to] += _value;                            // Add the same to the recipient
   }

}