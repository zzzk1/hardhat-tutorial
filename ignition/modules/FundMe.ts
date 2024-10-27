import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { vars } from "hardhat/config";

const THREE_MINS = 180;
const USD_ETH_AGGREGATOR_V3_ADDRESS = vars.get("USD_ETH_AGGREGATOR_V3_ADDRESS");

export default buildModule("FundMe", (m) => {
    const lockTime = m.getParameter("lockTime", THREE_MINS);

    const fundMe = m.contract("FundMe", [lockTime, USD_ETH_AGGREGATOR_V3_ADDRESS])

    return { fundMe };
});