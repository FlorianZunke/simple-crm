import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { doc, updateDoc } from "firebase/firestore";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatInputModule, CommonModule, MatFormFieldModule, FormsModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  firestore = inject(Firestore);
  userId: any = '';
  user: User = new User();
  loading: boolean = false;


  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private route: ActivatedRoute) {

  }


  async saveUser() {
    if (!this.userId) {
      console.error("Kein User-ID vorhanden!");
      return;
    }
  
    this.loading = true;
  
    try {
      const docRef = doc(this.firestore, 'users', this.userId);
      await updateDoc(docRef, this.user.toJson());
      this.dialogRef.close();
    } catch (error) {
      console.error("Fehler beim Speichern des Users:", error);
    } finally {
      this.loading = false;
    }
  }
}
