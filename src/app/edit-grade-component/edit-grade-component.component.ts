import { GradeServiceService } from './../services/grade-service.service';
import { Component, OnInit } from '@angular/core';
import { GradeElement } from '../grade-element';

@Component({
  selector: 'edit-grade-component',
  templateUrl: './edit-grade-component.component.html',
  styleUrls: ['./edit-grade-component.component.css']
})
export class EditGradeComponentComponent implements OnInit {

  editName;
  selectedGrade : GradeElement;
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

  constructor(private service: GradeServiceService) {   
      this.selectedGrade = service.getSelectedGrade();     
    this.selectGrade(this.selectedGrade.value - 1);
    console.log(this.selectedGrade);
    service.isSelectedChanged$.subscribe(
      isSelectedGradeToDisplay => {
    this.selectedGrade = service.getSelectedGrade();     
   })

  }
  

  ngOnInit(): void {

    this.editName = '';

  }

  editGrade(name) {
    if(name.value != '') {
      let selectedGrade = this.grades.find(grade => grade.isSelected === true)
      this.service.editGrade(name.value, selectedGrade.grade)
      name.value = "";
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
