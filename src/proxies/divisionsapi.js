const platformClient = require('purecloud-platform-client-v2');

async function getDivisionByName(divisionName) {
    const opts = {
        name: divisionName
    };

    const apiInstance = new platformClient.ObjectsApi();

    try {
        const division = await apiInstance.getAuthorizationDivisions(opts);
        console.log("divisionId:")
        console.log(division.entities[0].id);
        return division.entities[0].id;
    } catch (err) {
        console.error(`Error while retrieving division with name: ${logicalName}.`, err);
        return null;
    }
};

exports.getDivisionByName = getDivisionByName;