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

async function searchUser(username, state) {
  let body = {
    "query": [
      {
        "fields": [
          "username"
        ],
        "type": "EXACT",
        "value": username
      },
      {
        "type": "EXACT",
        "fields": [
          "state"
        ],
        "value": state
      }
    ]
  };

  apiInstance = new platformClient.UsersApi();
  try {
    return await apiInstance.postUsersSearch(body);
  } catch (e) {
    console.error(`Error has occurred while trying to search for ${username}`, e);
    return null;
  }
}

async function restoreUser(userId, userVersion) {
  let body = {
    "state": "active",
    "version": userVersion
  };
  apiInstance = new platformClient.UsersApi();
  try {
    return await apiInstance.patchUser(userId, body);
  } catch (e) {
    console.error(`Error has occurred trying to restore ${userId}`, e);
    return null;
  }
}

async function deleteUser(userId) {
  apiInstance = new platformClient.UsersApi();
  try {
    return await apiInstance.deleteUser(userId);
  } catch (e) {
    console.error(`Error has occurred trying to delete ${userId}`, e);
    return null;
  }
}

exports.createUser = createUser;
exports.searchUser = searchUser;
exports.restoreUser = restoreUser;
exports.deleteUser = deleteUser;
