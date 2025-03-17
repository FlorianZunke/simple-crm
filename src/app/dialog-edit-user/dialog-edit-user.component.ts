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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { doc, updateDoc } from "firebase/firestore";

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatInputModule, CommonModule, MatFormFieldModule, FormsModule, MatButtonModule, MatProgressBarModule, MatDatepickerModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  firestore = inject(Firestore);
  userId: any = '';
  user: User = new User();
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {

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

