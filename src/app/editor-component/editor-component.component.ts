import { GradeServiceService } from './../services/grade-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'editor-component',
  templateUrl: './editor-component.component.html',
  styleUrls: ['./editor-component.component.css']
})
export class EditorComponentComponent implements OnInit {

  gradeName;
  grades = [
    {
    'grade': 1,
    'isSelected': false
    },
    {
    'grade': 2,
    'isSelected': false
    },
    {
    'grade': 3,
    'isSelected': false
    },
    {
    'grade': 4,
    'isSelected': false
    },
    {
    'grade': 5,
    'isSelected': false
    },
    {
    'grade': 6,
    'isSelected': false
    }
  ];

  constructor(private service: GradeServiceService) { }

  ngOnInit(): void {

    this.gradeName = '';

  }
  addGrade(name) {
    if(name.value != '') {
      let selectedGrade = this.grades.find(grade => grade.isSelected === true)
      this.service.addNewGrade(name.value, selectedGrade.grade)
      name.value = "";
      this.unselectAllGrades();
    }
  }
  selectGrade(index: number) {
    this.unselectAllGrades()
    this.grades[index].isSelected = true
  }


  public unselectAllGrades() {
    this.grades.forEach(grade => {
      grade.isSelected = false
    });
  }

}
