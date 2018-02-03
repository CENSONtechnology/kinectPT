import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { ChartModule } from 'angular2-chartjs';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { DataComponent } from './components/data/data.component';
import { ChartComponent } from './components/chart/chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ExerciseService } from 'app/services/exercise.service';

const appRoutes: Routes = [
  {path: '', component: ExerciseComponent},
  {path: 'data', component: DataComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    DataComponent,
    ChartComponent,
    NavbarComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartModule
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
