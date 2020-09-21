const Math = artifacts.require('Math');
const TestContract = artifacts.require('TestContract');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(Math);

    deployer.link(Math, TestContract);
    
    await deployer.deploy(TestContract);
};
