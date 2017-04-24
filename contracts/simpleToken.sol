contract SimpleToken {

    // A mapping is like a hash table or associative array.
    // In this case, the keys are Ethereum addresses and the
    // values are that user's balance.
    mapping (address => uint) _balances;

    // The constructor
    function SimpleToken() {

        // The special variable msg.sender is the address of the
        // uer calling a function
        _balances[msg.sender] = 150;
    }

    function transfer(address toAddress, uint amount) returns (bool success) {
        if (_balances[msg.sender] < amount) { return false; }

        _balances[msg.sender] -= amount;
        _balances[toAddress] += amount;

        return true;
    }

    function balanceOf(address owner) constant returns (uint balance) {
        return _balances[owner];
    }
}