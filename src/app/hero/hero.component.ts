import { HeroService } from './../services/hero/hero.service';
import { Hero } from './../models/hero.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroes !:any;
  
  @Input() id             ?:string;
  @Input() heroName       ?:string;
  @Input() realName       ?:string;
  @Input() gender         ?:string;
  @Input() powers         ?:string;
  @Input() placeOfOrigin  ?:string;
  @Input() affiliation    ?:string;
  @Input() thumbnails     ?:string;
  constructor(private HeroService :HeroService) { }

  ngOnInit(): void {
  }

  removeHero() {
    this.HeroService.delete(this.id);
  }
}
