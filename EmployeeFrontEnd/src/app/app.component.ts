import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clarivate';

  constructor(private router:Router){}

  submit(form:any){
    this.router.navigate(['/employees'],{ queryParams: { query: form.value.search } });
  }
}
