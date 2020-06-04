import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameServiceService } from 'src/app/Services/game-service.service';
import { Games } from 'src/app/game-screen/board-game/board-game.component';

export class GamesDTO {
  constructor(
    public id: number,
    public gameType:any[],
    public gametPieces:any[]
  ){ }
}
@Component({
  selector: 'app-create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.css']
})

export class CreateNewGameComponent implements OnInit {

  errorMessage:string='Game Type or Game piece is not select';
  isSelected: boolean= false;
  gameDTO:GamesDTO;
  gamesToJoin:Games[];
  playerGames:Games[];
  username:string;
  id:number;
  gameId = null;
  newGameData:any={gameType:'',piece:''};

  gameOptions = {
    availablePieces: [
        {name: 'X'},
        {name: 'O'}
    ],
    selectedPiece: {name: 'O'},
    availableGameTypes: [
        {name: 'COMPETITION'},
        {name: 'COMPUTER'}
    ],
            selectedBoardDimension: {name: 'COMPUTER'}
        };


  constructor(
    private router:Router,
     private gameService:GameServiceService,
     private activRoute:ActivatedRoute,
     ) { }

  ngOnInit(): void {
    this.gameOptions,
    this.router,
    this.gameService,
    this.newGameData,
    this.gameDTO = new GamesDTO(this.id,this.gameOptions.availableGameTypes,this.gameOptions.availablePieces);
    this.id= this.activRoute.snapshot.params['id'];
  }

getGameToJoin(){

}
joinGame(){
  return this.gameService.joinGame(this.gamesToJoin).subscribe(
    (data) => {
       console.log(data)
       this.router.navigate(['gamescreen'])
     },
     (error) => {
       console.log(error)
     }
   )
   }


loadGame(){
}

  createNewGame() {
    console.log(this.id);
    return this.gameService.createGame({gameType:this.newGameData.gameType, playerPieceCode:this.newGameData.piece, id:this.id}).subscribe(
     (data) => {
        console.log(data)
        this.router.navigate(['gamescreen',data['id']])
      },
      (error) => {
        console.log(error)
      }
    )
    }


 }

