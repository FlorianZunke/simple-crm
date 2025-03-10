import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DiaologAddUserComponent } from '../diaolog-add-user/diaolog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user: User = new User();
  allUsers: any = [];

  constructor(public dialog: MatDialog, private firestore: FirebaseService, private router: Router) { }

  
  async ngOnInit() {
    this.allUsers = await this.firestore.getUsers();
    console.log(this.allUsers);
  }


  openDialog(): void {
    this.dialog.open(DiaologAddUserComponent)
  };


  navigateToUser(userId: string) {
    this.router.navigate(['/user', userId]); 
  }

}
