import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ApiService]
})
export class HeaderComponent {
  userName:string = ""
  constructor(private _apiService: ApiService){
    const loggedInUser = this._apiService.getLoggedInUser();
    this.userName = loggedInUser.name?.split(" ")[0][0];
    this.userName += loggedInUser.name?.split(" ")[1][0];
  }
}
