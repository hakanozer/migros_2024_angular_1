import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CryptoService } from '../../services/crypto.service';
import { IUser } from '../../../models/IUser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  user: IUser | null = null 
  constructor( private crypto: CryptoService) {
    const user = this.crypto.getUser()
    if (user) {
      this.user = user
    }
  }

}
