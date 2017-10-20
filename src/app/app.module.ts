import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatCardModule,MatInputModule,MatFormFieldModule,MatTabsModule} from '@angular/material';

import { ExploreComponent } from './explore/explore.component';
import { CreateComponent } from './create/create.component';
import { ShareComponent } from './share/share.component';

import {RouterModule, Routes} from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    CreateComponent,
    ShareComponent,
    TopNavbarComponent,
    BottomNavbarComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: "explore", component: ExploreComponent },
      { path: "create", component: CreateComponent },
      { path: "share", component: ShareComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
