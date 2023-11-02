const platformClient = require('purecloud-platform-client-v2');

async function getDivisionByName(divisionName) {
    switch(divisionName) {
        case "CTL_Repair_Vendor":
            return "6d043eba-faf5-497a-8845-9cc7c57db529";
        case "CenturyLink":
            return "39398b47-732a-4921-8ff7-8fbb5529219c";
        case "SPC_VXI":
            return "81708110-4a00-407b-9acd-180857a48a45";
        default: return null;
    }
};

exports.getDivisionByName = getDivisionByName;