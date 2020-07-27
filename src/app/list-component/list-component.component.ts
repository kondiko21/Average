import { GradeServiceService } from './../services/grade-service.service';
import { Component, OnInit } from '@angular/core';
import { GradeElement } from '../grade-element';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  gradesToDisplay: GradeElement[] = [];

  constructor(private service: GradeServiceService) { 
    service.gradeListChanged$.subscribe(
      gradeList =>{
        this.gradesToDisplay = service.getGrades();
      })
  }

  ngOnInit(): void {
  }

  selectGrade(id:number) {
    console.log(id)
    this.service.selectedGrade(id);
  }


}
