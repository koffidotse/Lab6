import { Component, OnInit } from '@angular/core';
import {DataService} from '../Service/data.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentData:any =[];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
      (data)=>{
        this.studentData = data.students;
        console.log(this.studentData);
      }
    )
  }

}
