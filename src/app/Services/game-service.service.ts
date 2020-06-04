import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) { }

  getGameToJoin(): Observable<any> {
    return this.http.get(`http://localhost:8000/control_Game/listOfGame`)
  }

  getGameById(id): Observable<any> {
    return this.http.get(`http://localhost:8000/control_Game/listOfGame/${id}`)
  }

  getAllPlayersGame(): Observable<any> {
    return this.http.get(`http://localhost:8000/control_Game/player_list`)
  }

  joinGame(gamesToJoin: any) {
    return this.http.post(`http://localhost:8000/control_Game/players/joinGame`, gamesToJoin)
  }


  createGame(gameDTO) {
    console.log(gameDTO);
    return this.http.post(`http://localhost:8000/game/create/${gameDTO.id}`, gameDTO)
  }

}
