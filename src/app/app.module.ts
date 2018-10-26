import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HistoryComponent } from './history/history.component';
import { StatsComponent } from './stats/stats.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule } from '@angular/forms';
import { ChartistComponent } from './chartist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    HistoryComponent,
    StatsComponent,
    AddEditComponent,
    ChartistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
