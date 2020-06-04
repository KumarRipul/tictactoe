import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Players } from 'src/app/register/register.component';
import { MoveServiceService } from './../../Services/move-service.service';
import { GameServiceService } from 'src/app/Services/game-service.service';

// ------- Games Class------

export class Games {
  constructor(
    public id: number,
    public firstPlayer: Players,
    public secondPlayer: Players,
    public gameStatus: string[],
    // ['WAITS_FOR_PLAYER','IN_PROGRESS','FIRST_PLAYER_WON','SECOND_PLAYER_WON','TIE','TIMEOUT'],
    public targetDate: Date
  ) { }
}

// -------------Moves Class

export class Moves {
  constructor(
  public boardColumn: number,
    public boardRow: number,
  ) { }
}

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})

export class BoardGameComponent implements OnInit {
  move: Moves;
  playerTurn;
  movesInGame = [];
  nextMoveData = [];
  playerMoves = [];
  gameProperties: any;
  column;
  rows = [
    [
      { 'id': '11', 'letter': '', 'class': 'box' },
      { 'id': '12', 'letter': '', 'class': 'box' },
      { 'id': '13', 'letter': '', 'class': 'box' }
    ],
    [
      { 'id': '21', 'letter': '', 'class': 'box' },
      { 'id': '22', 'letter': '', 'class': 'box' },
      { 'id': '23', 'letter': '', 'class': 'box' }
    ],
    [
      { 'id': '31', 'letter': '', 'class': 'box' },
      { 'id': '32', 'letter': '', 'class': 'box' },
      { 'id': '33', 'letter': '', 'class': 'box' }
    ]
  ];
  gameStatus: any;
  gameId: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private activerouter: ActivatedRoute,
    private moveService: MoveServiceService,
    private gameService: GameServiceService) {
      this.activatedRoute.params.subscribe((params)=>{
        this.gameId = params['id'];
        this.getInitialData();
      })
     }

  ngOnInit(): void {
    //this.movesInGame=Array(9).fill(null)
    this.rows.forEach(function (row) {
      row[0].letter = row[1].letter = row[2].letter = '';
      row[0].class = row[1].class = row[2].class = 'box';
    })
  }

  getInitialData() {

    this.moveService.gameProperties(this.gameId).subscribe((data)=>{
          this.gameProperties = data;
        this.gameStatus = this.gameProperties.gameStatus;
      this.getMoveHistory();
    })

 }

  getMoveHistory() {
    return this.moveService.getInGameMove().subscribe(
      (data) => {
        console.log(data)
        this.movesInGame = data;
        this.movesInGame.forEach(function (move) {
          this.rows[move.boardRow - 1][move.boardColumn - 1].letter = move.playerPieceCode;
          let gameStatus = this.movesInGame[this.movesInGame.length - 1].gameStatus;
          if (gameStatus != 'IN_PROGRESS') {
            alert(gameStatus)
          }
        },
          (error) => {
            const errorMessage = "Failed to load moves in game"
            console.log(error)
          })
      })
  };
  checkPlayerTurn() {
    return this.moveService.isPlayerTurn().subscribe(
      (data) => {
        console.log(data)
        this.playerTurn = data;
      },
      (error) => {
        const errorMessage = "Failed to load moves in game"
        console.log(error)
      })
  }
  getNextMove() {
    if (!this.gameProperties.secondPlayer) {
      return this.moveService.autoCreateMove().subscribe(
        (data) => {
          console.log(data)
          this.nextMoveData = data;
          this.getMoveHistory();
        },
        (error) => {
          const errorMessage = "Failed to load moves in game"
          console.log(error)
        })
    }
  }

  checkIfBoardCellAvailable(boardRow, boardColumn) {
    for (let i = 0; i < this.movesInGame.length; i++) {
      let move = this.movesInGame[i];
      if (move.boardColumn == boardColumn && move.boardRow == boardRow) {
        return false;
      }
    }
    return true;
  }

  markPlayerMove(column) {
    const boardRow = parseInt(column.id.charAt(0));
    const boardColumn = parseInt(column.id.charAt(1));
    console.log('boardRow', boardRow)
    console.log('boardCol', boardColumn)
    if (this.checkIfBoardCellAvailable(boardRow, boardColumn) == true) {
      // if player has a turn
      if (this.playerTurn == true) {
        return this.moveService.createMOve(this.movesInGame).subscribe(function () {
          this.getMoveHistory().success(function () {
            let gameStatus = this.movesInGame[this.movesInGame.length - 1].gameStatus;
            if (gameStatus == 'IN_PROGRESS') {
              this.getNextMove();
            } else {
              alert(gameStatus)
            }
          });
        }), (error => {
          const errorMessage = "Can't send the move"
        });
      }
    }
  }
}
