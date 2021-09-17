var ui = new firebaseui.auth.AuthUI(firebase.auth());
let login = document.querySelector('login');

const setUpLoginButton = () => {
    ui.start('#loginUI', {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectURL) {
                console.log(authResult);
                return false;
        }
    },
    signInFlow: 'popup',
    signOutOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
});
};