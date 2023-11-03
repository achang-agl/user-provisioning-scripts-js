const platformClient = require('purecloud-platform-client-v2');

async function createUser(userInfo) {
  apiInstance = new platformClient.UsersApi();
  console.log("Ingesting userInfo");
  console.log(userInfo);
  console.log("Ingested userInfo");
  const user = {
    name: userInfo.NAME,
    email: userInfo.EMAIL,
    password: userInfo.PASSWORD,
    divisionId: userInfo.divisionId
  };

  console.log(user);

  try {
    return await apiInstance.postUsers(user);
  } catch (e) {
    console.error(`Error has occurred while trying to create user ${userInfo.name}`, e);

    return null;
  }
};

exports.createUser = createUser;
