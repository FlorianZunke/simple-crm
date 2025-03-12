import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(private firestore: Firestore) {}


  async addUser(user: any) {
    const usersRef = collection(this.firestore, 'users');
    return await addDoc(usersRef, user);
  }


  async getUsers() {
    const usersRef = collection(this.firestore, 'users');
    const snapshot = await getDocs(usersRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
}