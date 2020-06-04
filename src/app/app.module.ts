import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { NewGameScreenComponent } from './new-game-screen/new-game-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { MenuComponent } from './new-game-screen/menu/menu.component';
import { CreateNewGameComponent } from './new-game-screen/create-new-game/create-new-game.component';
import { BoardGameComponent } from './game-screen/board-game/board-game.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './Services/authentication.service';
import { GameServiceService } from './Services/game-service.service';
import { MoveServiceService } from './Services/move-service.service';
import { PlayerServiceService } from './Services/player-service.service';
import { RegisterComponent } from './register/register.component';
import { CellComponent } from './game-screen/cell/cell.component';





@NgModule({
  declarations: [
    AppComponent,
    NewGameScreenComponent,
    GameScreenComponent,
    ErrormessageComponent,
    MenuComponent,
    CreateNewGameComponent,
    BoardGameComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [AuthenticationService,GameServiceService,MoveServiceService,PlayerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
