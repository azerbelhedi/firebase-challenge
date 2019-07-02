var firebaseConfig = {
    apiKey: "AIzaSyD1gjhj6aQz9TWbstMsi2EjIEkeBqgZnpE",
    authDomain: "beta1-2018.firebaseapp.com",
    databaseURL: "https://beta1-2018.firebaseio.com",
    projectId: "beta1-2018",
    storageBucket: "beta1-2018.appspot.com",
    messagingSenderId: "749626943516",
    appId: "1:749626943516:web:a8d6cff05330ff51"
};

firebase.initializeApp(firebaseConfig);

function addStudent(userData){
    console.log(userData.course)
    let database = firebase.database()

    let ref = database.ref(`${userData.course}/`)

    ref.push(userData)

    document.querySelector("#subscribe-form").reset()
}