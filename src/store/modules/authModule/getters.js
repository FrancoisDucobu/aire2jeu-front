/* eslint-disable */

export default {
  isAuthenticated(state) {
    const url = state.userUrl;
    const token = state.userToken;
    const authUser = state.authUser;
    return !(!token || token.length === 0);
  },
  getAuthUser(state) {
    return state.authUser;
  },
  getUserToken(state) {
    return state.userToken;
  },
  getUserUrl(state) {
    return state.userUrl;
  },
  getAuthRole(state) {
    return state.auth && state.auth.roles[0];
  },
  getAuthPermissions(state) {
    return state.auth.permissions;
  },
  getErrors(state) {
    return state.errors || {};
  },
  // isSessionStillValid(state) {
  //   return Date.now() < (new Date(state.sessionExpiration)).getTime()
  // }
};
