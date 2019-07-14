import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HightlightedContentComponent } from './hightlighted-content/hightlighted-content.component';
import { AboutMeComponent } from './hightlighted-content/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HightlightedContentComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
