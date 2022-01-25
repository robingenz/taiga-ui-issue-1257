import { Component, Inject, OnInit } from '@angular/core';
import { TuiNotificationsService } from '@taiga-ui/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(TuiNotificationsService)
    private readonly notificationsService: TuiNotificationsService
  ) { }

  ngOnInit(): void {
  }

  showNotification(): void {
    this.notificationsService
      .show('A simple option', {
          label: 'With a heading!',
      })
      .subscribe();
  }

}
