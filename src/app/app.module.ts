import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "@angular/material";
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    [BrowserAnimationsModule],
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      //{
      //  path: '',
      //
      //},
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
