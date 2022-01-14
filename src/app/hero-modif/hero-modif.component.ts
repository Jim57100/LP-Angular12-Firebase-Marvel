import { HeroService } from './../services/hero/hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-modif',
  templateUrl: './hero-modif.component.html',
  styleUrls: ['./hero-modif.component.scss']
})
export class HeroModifComponent implements OnInit {
  change ?:boolean = false;
  heroes !:any;
  // @Input() id             ?:string;
  
  constructor(private heroService : HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.heroService.get(id).subscribe((value: any) => {
      console.log(value)
      this.heroes = value;
    });
  }

  updateHero() {
    this.heroService.update(this.heroes).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
