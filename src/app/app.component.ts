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
    const token = 'EAAJxheEZBRCoBO4N7p36YMLMiTA1FUmOBhM6Bfg728hnEMLGplAFGTayrk13UXGLYWfqGdy6OYjhybxP5BDxp6OHIe6M3iMJwlA9WR2j0xwAPsAHZCmkZAFNrYAVX3JU2lncOgMXBRRf9UZCNtJ2Xkoq6vHJUQ27njY0iVInAFqUyI4DrIEZA5H2O8uDhKUy2DN0Sz1xryEZAafjyUwemjCNLuj8CpHv6k'; 
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