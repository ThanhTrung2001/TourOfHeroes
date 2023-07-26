import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { CreationComponent } from './creation/creation.component';
import { TransformationComponent } from './transformation/transformation.component';
import { FilteringComponent } from './filtering/filtering.component';
import { JoinComponent } from './join/join.component';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { MultiCastingComponent } from './multi-casting/multi-casting.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { UtilityComponent } from './utility/utility.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { MathematicalComponent } from './mathematical/mathematical.component';
import { HighOrderComponent } from './high-order/high-order.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    RxjsComponent,
    CreationComponent,
    TransformationComponent,
    FilteringComponent,
    JoinComponent,
    JoinCreationComponent,
    MultiCastingComponent,
    ErrorHandlingComponent,
    UtilityComponent,
    ConditionalComponent,
    MathematicalComponent,
    HighOrderComponent,
    SubjectComponent,
  ],
  imports: [CommonModule, RxjsRoutingModule],
  exports: [RxjsComponent],
})
export class RxjsModule {}
