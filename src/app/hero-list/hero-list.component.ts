import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../../app/services/hero/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes !:any;



  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe((data: any) => {
      this.heroes = data;
    });
  }

}
