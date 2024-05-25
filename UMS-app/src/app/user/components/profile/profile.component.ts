import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user: User = { id: 0, name: '', username: '', email: '' };

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const userId = this.authService.getRole() === 'admin' ? 1 : 2;
    this.userService
      .getUserById(userId)
      .subscribe((user) => (this.user = user));
  }
}
