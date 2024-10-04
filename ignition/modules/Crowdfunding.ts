const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CrowdfundingModule", (m) => {
  const Crowdfunding = m.contract("Crowdfunding", [], {});

  return { Crowdfunding };
});

// deployed address: 0x49Ce515B36C34B7098E3286f816CEA053E43708b
