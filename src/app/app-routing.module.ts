import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGameScreenComponent } from './new-game-screen/new-game-screen.component';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'', component: RegisterComponent},
  {path:'createUser', component: RegisterComponent},
  // {path:'login', component: LoginComponent},
  {path:'newgame/:id', component:  NewGameScreenComponent},
  {path: 'gamescreen/:id', component: GameScreenComponent},
  {path:'logout', component:LogoutComponent},


  {path:'**', component: ErrormessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
