import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  person = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFeatureSelection(route) {
    this.person = route;
    this.router.navigate(['/feature'])
  }
}