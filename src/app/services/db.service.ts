import { Injectable } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  // Your web app's Firebase configuration
  firebaseConfig: Object = {
    apiKey: 'AIzaSyAii6v8RvWNHA9ZgQ1gRl873zbV-OZYW1Q',
    authDomain: 'community-connect-54f45.firebaseapp.com',
    databaseURL: 'https://community-connect-54f45-default-rtdb.firebaseio.com',
    projectId: 'community-connect-54f45',
    storageBucket: 'community-connect-54f45.appspot.com',
    messagingSenderId: '442452417322',
    appId: '1:442452417322:web:4aff63375f8434f75e9c53',
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);

  database = getDatabase(this.app);

  constructor() {}

  getData(dataPath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, dataPath))
        .then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.val());
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }

  setData(dataPath: string, dataValue: Object) {
    const db = getDatabase();
    set(ref(db, dataPath), dataValue);
  }
}
