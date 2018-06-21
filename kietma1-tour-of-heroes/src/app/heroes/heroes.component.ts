import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHero();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHero(): void  {
      this.heroService.getHero().subscribe(heroes => this.heroes = heroes);
  }
}

