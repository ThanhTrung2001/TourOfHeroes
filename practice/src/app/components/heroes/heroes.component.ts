import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/mesage/message.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  //dependency injection service into component
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
    console.log('Create Hero Component');
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  //can null
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data) => (this.heroes = data));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
