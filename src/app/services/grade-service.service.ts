import { GradeElement } from './../grade-element';
import { Injectable, Output } from '@angular/core';
import {  EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {
  
  constructor() { 
    
  }

  isSelectedGradeToDisplay: boolean = false;

  averageData = {
    averageGrade : 0,
    gradeAmount: 0,
    gradeTotal: 0,
  }
  gradeListChanged$ : Subject<GradeElement[]> = new Subject<GradeElement[]>();
  averageDataChanged$ : Subject<any> = new Subject<any>();
  isSelectedChanged$ : Subject<boolean> = new Subject<boolean>();
  gradeList: GradeElement[] = [];

  getGrades(): GradeElement[] {
    return this.gradeList;  
    console.log(this.gradeList);
  }

  getAverageData(): any {
    return this.averageData
  }

  getSelectDetails(): boolean {
    return this.isSelectedGradeToDisplay;
  }
  getSelectedGrade() : GradeElement {
    return this.gradeList.find(grade => grade.isSelected === true)

  }

  calculateGradeAverage() {
    console.log("Recalculated grade average");
    this.averageData.gradeTotal = 0;
    this.averageData.gradeAmount = 0;
    this.averageData.averageGrade = 0;
    this.averageData.gradeAmount = this.gradeList.length;
    this.gradeList.forEach(grade => {
      this.averageData.gradeTotal += grade.value;
    });
    if(this.averageData.gradeTotal == 0 && this.averageData.gradeAmount == 0) this.averageData.averageGrade = 0;
    else this.averageData.averageGrade = this.averageData.gradeTotal / this.averageData.gradeAmount;
    this.averageDataChanged$.next(this.averageData);
  }

  addNewGrade(name: string, value: number) {
      this.gradeList.push(
        {
          name: name,
          value: value,
          isSelected: false,
        }
      )
    this.calculateGradeAverage();
    this.gradeListChanged$.next(this.gradeList);
    this.averageDataChanged$.next(this.averageData);
  }

  removeGrade() {
      var itemToRemove = this.gradeList.findIndex(grade => grade.isSelected === true)
      this.gradeList.splice(itemToRemove, 1);
      this.unselectAllGrades();
      this.gradeListChanged$.next(this.gradeList);
      this.calculateGradeAverage();
  }

  resetGradeList() {
    console.log("Czyść");
    this.gradeList = [];
    this.averageData.averageGrade = 0;
    this.averageData.gradeTotal = 0;
    this.averageData.gradeAmount = 0;
    this.gradeListChanged$.next(this.gradeList);
    this.averageDataChanged$.next(this.averageData);
    this.isSelectedChanged$.next(this.isSelectedGradeToDisplay);
  }

  editGrade(name:string, value:number) {
    var itemToEdit = this.gradeList.findIndex(grade => grade.isSelected === true)
    this.gradeList[itemToEdit].name = name;
    this.gradeList[itemToEdit].value = value;
    this.gradeListChanged$.next(this.gradeList);
    this.calculateGradeAverage();
    this.unselectAllGrades();
  }

  selectedGrade(id: number) {
    this.unselectAllGrades();
    this.gradeListChanged$.next(this.gradeList)
    this.isSelectedGradeToDisplay = true;
    this.gradeList[id].isSelected = true;
    this.isSelectedChanged$.next(this.isSelectedGradeToDisplay);
  }

  unselectAllGrades() {
    this.gradeList.forEach(grade => {
      grade.isSelected = false
    });
    this.isSelectedGradeToDisplay = false;
    this.isSelectedChanged$.next(this.isSelectedGradeToDisplay);
  }


}
