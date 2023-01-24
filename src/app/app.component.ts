import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingServie } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private loggingSerice: LoggingServie) {}  
  
  ngOnInit(): void {
    this.authService.autoLogin();
    this.loggingSerice.printLog('Hello from AppComponent ngOnInit');
  }
}
