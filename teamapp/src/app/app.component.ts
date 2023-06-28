import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = '';
  nuTeams : number | "" = "";
  teams: string[][] = [];
  emojis = [ "🥝", "🐼", "🐟", "🐡","☄️",  "🦩", "🐧", "🐒", "🐘",  "🐅", "🐉", "🍊", "🔴", "🐓", "👑", "📀", "✂️", "💣", "⚖️", "🎷", "🎷", "👅"]
  emoji =""
  newEmojis: string[] = [];
  

  onInput(member: string){
    this.newMemberName = member;
  
  }
  onNumberTeamsInput(value:string){
    this.nuTeams = Number(value);
  }

 

  addMember(){
    if(!this.newMemberName)
    {
      this.errorMessage = "Namn får ej vara tomt!"
      return;
    }
    this.errorMessage=""
    let emoji = this.emojis[Math.floor(Math.random()*this.emojis.length)]

    this.emoji = emoji;
    this.members.push(this.newMemberName + " " + this.emoji);
    this.newEmojis.push(this.emoji)
    this.newMemberName=""
    //missing a piece here -needs this to be aria-labelled and rendered in a separate p tag but when I do so it changes all emojis.
  }

  generateTeams(){
    if(!this.nuTeams || this.nuTeams <= 0) {
      this.errorMessage ="Ogiltigt antal lag!"
      return
    }
    if(this.nuTeams > this.members.length){
      this.errorMessage="Inte tillräckligt många lagkamrater"
      return;
    }
    this.errorMessage=""
    const allMembers = [...this.members]
    while(allMembers.length){
        for(let i=0; i< this.nuTeams; i++){
          const randomNu = Math.floor(Math.random()* allMembers.length)
          console.log(randomNu)
          const member = allMembers.splice(randomNu, 1)[0]
          if(!member){
            break;
          }
          if(this.teams[i]){
            this.teams[i].push(member) 
          }else{
            this.teams[i]= [member]
          }
      }
      
    }
    this.members = [];
    this.nuTeams = "";
  }

}
