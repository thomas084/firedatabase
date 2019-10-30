export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyBmCrQ_DMKGAoS-Kvup45zL5uRef_TdqUc",
  authDomain: "orient-91615.firebaseapp.com",
  databaseURL: "https://orient-91615.firebaseio.com",
  projectId: "orient-91615",
  storageBucket: "orient-91615.appspot.com",
  messagingSenderId: "767402078628",
  appId: "1:767402078628:web:0b68829278c2e268df5131"
  }
};
export const snapshotToArray =  snapshot => {
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key= element.key;
    returnArray.push(item);
  });
  return returnArray;
}