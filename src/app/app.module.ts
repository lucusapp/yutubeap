import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {HttpClientModule} from "@angular/common/http"

import { YoutubeService } from './services/youtube.service';

import { AppComponent } from "./app.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule,HttpClientModule],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
