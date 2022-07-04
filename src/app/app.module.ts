import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplayMoverComponent } from './replay-mover/replay-mover.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReplayMover2Component } from './replay-mover2/replay-mover2.component';

@NgModule({
  declarations: [
    AppComponent,
    ReplayMoverComponent,
    ReplayMover2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
