const Math = artifacts.require("Math");
const TestContract = artifacts.require('TestContract');

module.exports = async () => {
    const bMath = await Math.new();
    Math.setAsDeployed(bMath);

    await TestContract.link(bMath);

    const testContract = await TestContract.new();
    TestContract.setAsDeployed(testContract);    
};
