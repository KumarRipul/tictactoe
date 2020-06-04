import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from './../Services/player-service.service';

export class Players {
  constructor(
    public id:number,
    public username: string,
    public password:string,
    public email:string
  ){
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
id:number;
username:string;
password:string;
email:string;
playerDTO:Players;

  constructor(private router:Router, private activRoute:ActivatedRoute, private playerService: PlayerServiceService) { }

  ngOnInit(): void {
    this.id
    this.playerService,
    this.router,
    this.activRoute,
    this.playerDTO= new Players(this.id,this.username,this.password,this.email)
  }

createNewPlayer(){
  return this.playerService.createPlayerAccount(this.playerDTO).subscribe(
    (data) => {
       console.log(data)
       this.router.navigate(['newgame',data['id']]);
     },
     (error) => {
       console.log(error)
     }
   )
}

}
