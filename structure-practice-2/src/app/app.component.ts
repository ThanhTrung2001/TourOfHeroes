import {
  AfterViewInit,
  Component,
  OnInit,
  Query,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { ShareBComponent } from './shared/components/share-b/share-b.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'structure-practice-2';
  isShowing: boolean = false;
  @ViewChild('container', { read: ViewContainerRef })
  containerRef?: ViewContainerRef;
  @ViewChildren(ShareBComponent) shareBComponent?: QueryList<ShareBComponent>;
  constructor() {}

  loadComponent() {
    import('./shared/components/share-b/share-b.component').then(
      ({ ShareBComponent }) => {
        this.containerRef?.createComponent(ShareBComponent);
      }
    );
  }

  toggle() {
    if (this.shareBComponent) {
      console.log(this.shareBComponent);
      console.log('ShareB already loaded, wait to show');
      this.isShowing = !this.isShowing;
    }
  }
}
