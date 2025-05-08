import { Component, OnInit } from '@angular/core';
import { FacebookService, FacebookUser } from './facebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyApp';
  user: FacebookUser | null = null;

  constructor(private facebookService: FacebookService) {}

  ngOnInit(): void {
    const token = '6a9b75bf6d8bb19c773672d0da0e280f'; 
    this.facebookService.getFacebookUser(token).subscribe({
      next: (data) => {
        console.log('Facebook verisi:', data);
        this.user = data;
      },
      error: (err) => {
        console.error('Facebook kullanıcı bilgisi alınamadı:', err);
      }
    });
  }
}
