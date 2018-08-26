import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { HighlightOnErrorDirective } from './directives/highlightOnError/highlight-on-error.directive';
import { TriangleChallengeComponent } from './components/triangle-challenge/triangle-challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsComponent,
    HighlightOnErrorDirective,
    TriangleChallengeComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
