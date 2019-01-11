import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../models/Country';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  private arrStudents = [];
  private country: Country;
  private selectedCountry = 'Netherlands';

  constructor(private countryService: CountryService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }
}
