import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent implements OnInit {
  addAlert:boolean = false;
  public hero !:Hero;
  constructor(private heroService :HeroService) { }

  ngOnInit(): void {
    this.hero = new Hero();
  }

  addHero() {
    this.heroService.createNewHero(this.hero).then(()=> {
      this.addAlert = true;
      this.hero = new Hero();
    }).catch(() => console.log('failed'))
  }
}
