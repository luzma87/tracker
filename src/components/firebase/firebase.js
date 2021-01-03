import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    // console.log(config);
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    return this.auth.signOut();
  }

  doPasswordReset(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate(password) {
    return this.auth.currentUser.updatePassword(password);
  }

  // *** Merge Auth and DB User API *** //
  onAuthUserListener(next, fallback) {
    return this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .onSnapshot((snapshot) => {
            const dbUser = snapshot.data();
            if (dbUser) {
              if (!dbUser.roles) {
                dbUser.roles = {};
              }
              const mergedUser = {
                uid: authUser.uid,
                email: authUser.email,
                ...dbUser,
              };
              next(mergedUser);
            } else {
              fallback();
            }
          });
      } else {
        fallback();
      }
    });
  }

  // *** user ***
  user(uid) {
    return this.db.collection('users').doc(uid);
  }

  users() {
    return this.db.collection('users');
  }

  // *** event ***
  event(id) {
    return this.db.collection('events').doc(id);
  }

  events() {
    return this.db.collection('events');
  }


  userThing(thing, userUid, thingId) {
    if (userUid) {
      return this
        .userThings(thing, userUid)
        .doc(thingId);
    }
    return {
      onSnapshot: () => { },
    };
  }

  userThings(thing, userUid) {
    if (userUid) {
      return this.db
        .collection(thing)
        .doc(userUid)
        .collection(thing);
    }
    return {
      onSnapshot: () => { },
    };
  }

  userEvent(userUid, id) {
    return this.userThing('events', userUid, id);
  }

  userEvents(userUid) {
    return this.userThings('events', userUid);
  }

  userStore(userUid, id) {
    return this.userThing('stores', userUid, id);
  }

  userStores(userUid) {
    return this.userThings('stores', userUid);
  }

  userCategory(userUid, id) {
    return this.userThing('categories', userUid, id);
  }

  userCategories(userUid) {
    return this.userThings('categories', userUid);
  }

  userAccount(userUid, id) {
    return this.userThing('accounts', userUid, id);
  }

  userAccounts(userUid) {
    return this.userThings('accounts', userUid);
  }

}

export default Firebase;
