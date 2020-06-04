import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoveServiceService {

  constructor(private http:HttpClient) { }

  getInGameMove(){
  return this.http.get< any []>( `http://localhost:8000/control_move/players/list`)
  }

  autoCreateMove(){
  return this.http.get< any >( `http://localhost:8000/control_move/autocreate_move`)}

  moveValidate(){
  return this.http.get( `http://localhost:8000/control_move/players/check`)
  }

  isPlayerTurn(){
  return this.http.get( `http://localhost:8000/control_move/players/player_turn`)
  }
  gameProperties(id){
    return this.http.get( `http://localhost:8000/control_Game/listOfGame/${id}`)
    }

  createMOve(createMove){
  return this.http.post( `http://localhost:8000/control_move/players/create_move`,createMove)

  }
}
