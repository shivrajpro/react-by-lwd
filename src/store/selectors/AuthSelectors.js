export const isAuthenticated = (state)=>{
    return state.auth.auth.idToken !== '';
}