// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.6.12;

import "./Math.sol";

contract TestContract {
    using Math for uint;

    function add(uint a, uint b) public returns (uint) {
        return Math.badd(a, b);
    }

    function sub(uint a, uint b) public returns (uint) {
        return Math.bsub(a, b);
    }
}
