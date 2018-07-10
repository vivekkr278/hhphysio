const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
var firebaseAdmin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');
firebaseAdmin.initializeApp({
    credential:firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://healinghandsapc.firebaseio.com"
});
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

var db = firebaseAdmin.firestore();

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.createUser=functions.https.onRequest((request, response) => {
    var docRef = db.collection('users').doc();
    //return JSON.stringify(request.body)
    var setAda = docRef.set({
         firstName: request.body.name,
         lastName: 'Kumar'
    });

})

exports.getUser=functions.https.onRequest((request, response) => {
    var docRef = db.collection('users');

    var allCities = docRef.get()
        .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });
        return console.log("snapshot : "+JSON.stringify(snapshot));
        })
        .catch(err => {
        console.log('Error getting documents', err);
    });


})

