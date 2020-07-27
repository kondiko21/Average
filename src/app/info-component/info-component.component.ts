import { GradeServiceService } from './../services/grade-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-component',
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.css']
})
export class InfoComponentComponent implements OnInit {

  averageData : {
    averageGrade : 0,
    gradeAmount : 0,
    gradeTotal : 0
  };

  averageGrade: number = 0;
  gradeAmount: number = 0;
  gradeTotal: number = 0;

  constructor(private service : GradeServiceService) { 
    this.averageData = ({
      averageGrade : 0,
      gradeAmount : 0,
      gradeTotal : 0
    })
    service.averageDataChanged$.subscribe(
      averageData =>{
        this.averageData = service.getAverageData();
        this.averageGrade = this.averageData.averageGrade;
        this.gradeAmount = this.averageData.gradeAmount;
        this.gradeTotal = this.averageData.gradeTotal;
      })
  }

  ngOnInit(): void {
  }

  resetGradeList() {
    this.service.unselectAllGrades();
    this.service.resetGradeList();
    console.log(this.service.isSelectedGradeToDisplay)
  }

  turnAddMode() {
    this.service.unselectAllGrades();
  }

  removeGrade() {
    this.service.removeGrade();
  }
}
