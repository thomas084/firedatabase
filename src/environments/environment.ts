import { element } from 'protractor';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
