import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const firebaseInit = () =>{
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); // if already initialized, use that one
     }
} 

export const handleGoogleSignIn = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return   firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        const signedInUser = {
            name: user.displayName,
            email: user.email
        };
        return signedInUser;
    }).catch((error) => {console.log(error.message)})
}

export const handleFbSignIn = () =>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
    .then((result) => {
      var user = result.user;
      const signedInUser = {
        name: user.displayName,
        email: user.email
      };
      return signedInUser;
    })
    .catch((error) => console.log(error.message));
}

export const createNewUser = (name,email,password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      firebase.auth().currentUser.updateProfile({
          displayName: name
      })
      return(res.user);     
  })
  .catch(err=> console.log({error: err.message}))
}

export const signIn  = (email,password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      return(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
  }