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
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    [BrowserAnimationsModule],
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
    //RouterModule.forRoot([
    //  {
    //    path: '',
    //    redirectTo: '/dashboard',
    //    pathMatch: 'full'
    //  },
    //  {
    //    path: 'heroes',
    //    component: HeroesComponent
    //  },
    //  {
    //    path: 'dashboard',
    //    component: DashboardComponent
    //  },
    //  {
    //    path: 'detail/:id',
    //    component: HeroDetailComponent
    //  }
    //])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
