import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
//import { HEROES } from './mock-heroes';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [HeroService] //To teach the injector how to make a HeroService
})

export class HeroesComponent implements OnInit{
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
