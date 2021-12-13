import { Component, OnInit } from '@angular/core';
import MembersJson from '../../assets/members.json';

interface MEMBER {
  forename: string;
  surname: string;
  email: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tableOn = true;
  buttonText = 'Tabelle verstecken';
  members: MEMBER[] = MembersJson;

  constructor() {}

  ngOnInit(): void {
    console.log(this.members);
  }

  tableOnOff() {
    // diese Funktion muss implementiert werden
    // buttonText aendern und
    // tableOn umschalten

    if(this.buttonText === 'Tabelle verstecken'){
      this.buttonText = 'Tabelle anzeigen';
      this.tableOn = false;
    }
    else{
      this.buttonText = 'Tabelle verstecken';
      this.tableOn = true;
    }
  }
}
