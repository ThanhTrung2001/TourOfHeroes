import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { enableProdMode } from '@angular/core';

// const startTime = performance.now();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // .then(() => {
  //   const endTime = performance.now();
  //   const initialLoadingTime = endTime - startTime;
  //   console.log(`Initial Loading Time: ${initialLoadingTime} milliseconds`);
  // })
  .catch((err) => console.error(err));
