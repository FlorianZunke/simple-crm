import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseService } from '../services/firebase.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatInputModule, CommonModule, MatFormFieldModule, FormsModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  user: User = new User();
  loading: boolean = false;


  constructor(private firestore: FirebaseService, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {

  }

  saveUser() {

  }
}
