import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getOrCreateContainerRef } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

constructor(private router: Router) { }


ngOnInit() {
}

go() {
  this.router.navigate(['/checkout']);
}

}

