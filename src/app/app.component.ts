import { GradeServiceService } from './services/grade-service.service';
import { FormsModule } from '@angular/forms';
import { GradeElement } from './grade-element';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  isSelectedGradeToDisplay: boolean = false;

  constructor(private service : GradeServiceService) { 
    service.isSelectedChanged$.subscribe(
      isSelectedGradeToDisplay => {
        this.isSelectedGradeToDisplay = service.getSelectDetails();
      })

  }

  ngOnInit(): void {

  }

  
}
