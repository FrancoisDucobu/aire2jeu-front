/* eslint-disable */

// import ability from '@u/ability' todo import package

export default {
    setAuthUser(state, payload) {
        state.authUser = payload
        // if (typeof payload.expiration !== 'undefined') {
        //     state.sessionExpiration = payload.expiration
        // }
        // if (payload.remember) {
        //     state.remember = payload.remember
        // }
        // state.errors = payload.errors
    },

    setUserToken(state, payload){
        state.userToken = payload.token
    },
    setUserUrl(state, payload){

        state.userUrl = payload.url
    },
    setErrors(state, errors) {
        // console.log('mutation setErrors', errors)
        state.errors = errors
    },

    setPermissions(state, payload) {
        const permissions = state.auth.permissions

        const arrayAbilities = []
        permissions.map(perm => arrayAbilities.push({action: perm, subject: 'all'}))
        ability.update([])
        ability.update(arrayAbilities)
    }
}
