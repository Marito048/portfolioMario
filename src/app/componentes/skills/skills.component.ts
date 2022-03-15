import { Component, OnInit } from '@angular/core';
import {SKILL} from '../../mock-skills';
import { skills } from 'src/app/skills';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills=SKILL;
  selectedSkill?:skills;
  constructor(){} 
  ngOnInit():void{

  } 
  onSelect (skill:skills):void{
    this.selectedSkill=skill;
  } 

}
