import { Component } from '@angular/core';
import { MatDialogActions } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseService } from '../services/firebase.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-diaolog-add-user',
  standalone: true,
  imports: [MatDialogActions, MatInputModule, MatFormFieldModule, MatDatepickerModule, CommonModule, FormsModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './diaolog-add-user.component.html',
  styleUrl: './diaolog-add-user.component.scss'
})


export class DiaologAddUserComponent {

  constructor(private firestore: FirebaseService, public dialogRef: MatDialogRef<DiaologAddUserComponent>) {}

  user : User = new User();
  birthDate: Date = new Date(2000, 0, 1);
  loading: boolean = false;

  saveUser() {
    this.user.birthdate = this.birthDate.getTime();
    this.loading = true;

    this.firestore.addUser(this.user.toJson()).then(() => {
      this.loading = false;
      this.dialogRef.close();
      console.log("User erfolgreich in Firestore gespeichert!");
    }).catch(error => {
      console.error("Fehler beim Speichern des Users:", error);
    });
  }
}
