import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private firestore: Firestore) {}

  async addUser(user: any) {
    const usersRef = collection(this.firestore, 'users');
    return await addDoc(usersRef, user);
  }
}