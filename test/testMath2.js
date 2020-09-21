/* eslint-env es6 */

const TestContract = artifacts.require('TestContract');
const { BN } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

/*
Tests initial CRP Pool set-up including:
BPool deployment, token binding, balance checks, BPT checks.
*/
contract('contractTests - second run', async (accounts) => {
    const admin = accounts[0];

    let testContract;

    before(async () => {
        testContract = await TestContract.deployed();
    });

    it('adds correctly (second time)', async () => {
        const a = new BN('5678');
        const b = new BN('1234');

        expect(await testContract.add.call(a, b)).to.be.bignumber.equal(a.add(b))
    });

    it('subtracts correctly (second time)', async () => {
        const a = new BN('5678');
        const b = new BN('1234');

        expect(await testContract.sub.call(a, b)).to.be.bignumber.equal(a.sub(b));
    });
});
