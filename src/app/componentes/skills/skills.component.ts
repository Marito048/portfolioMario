import { Component, OnInit } from '@angular/core';
import {Skill} from 'src/app/skill';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  skills:Skill ={
    id:1,
    porcentaje:85,
    caracteristica:"HTML"
  }
  constructor() { }


  }
