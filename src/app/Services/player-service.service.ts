import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor(private http:HttpClient) { }

  getAllPlayer(){
  return this.http.get<any[]>( `http://localhost:8000/control_player/players`)
  }

  getLoggedPlayer(){
  return this.http.get< any[] >( `http://localhost:8000/control_player/logged`)}

  createPlayerAccount(playerDTO){
  return this.http.post( `http://localhost:8000/player/create`,playerDTO)
  }

}
