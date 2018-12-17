import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { DashBoardComponentComponent } from './dash-board-component/dash-board-component.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AppareilService } from './services/appareil.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    DashBoardComponentComponent,
    SideBarComponentComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
