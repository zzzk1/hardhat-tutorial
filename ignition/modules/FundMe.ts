import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const THREE_MINS = 180;

export default buildModule("FundMe", (m) => {
    const lockTime = m.getParameter("lockTime", THREE_MINS);

    const fundMe = m.contract("FundMe", [lockTime])

    return { fundMe };
});