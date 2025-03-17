import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { doc, onSnapshot } from "firebase/firestore";
import { Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  firestore = inject(Firestore);
  userId: any = '';
  user: User = new User;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }


  getUser() {
    const docRef = doc(this.firestore, 'users', this.userId);

    onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        this.user = new User(docSnap.data());;
      } else {
      }
    });
  }


  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
  }


  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
  }
}
