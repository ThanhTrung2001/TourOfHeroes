import { Injectable, OnDestroy } from '@angular/core';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService implements OnDestroy {
  constructor() {
    console.log('Create test service instance.');
  }

  ngOnDestroy(): void {
    console.log('Destroy test Service');
  }
}
