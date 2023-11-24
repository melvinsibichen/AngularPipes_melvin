import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  students={
    "stud":[
      
        {
          "RollNo": 1,
          "Name": "John",
          "Gender": "male",
          "Age": 28,
          "Location": "Thrissur",
          "Phone": "9876543210",
          "State": "Kerala",
          "Marks": 0.6
        },
        {
          "RollNo": 2,
          "Name": "Alice",
          "Gender": "female",
          "Age": 22,
          "Location": "Ernakulam",
          "Phone": "8765432109",
          "State": "Kerala",
          "Marks": 0.78
        },
        {
          "RollNo": 3,
          "Name": "Bob",
          "Gender": "male",
          "Age": 24,
          "Location": "Kozhikode",
          "Phone": "7654321098",
          "State": "Kerala",
          "Marks": 0.84
        },
        {
          "RollNo": 4,
          "Name": "Eva",
          "Gender": "female",
          "Age": 27,
          "Location": "Thiruvananthapuram",
          "Phone": "6543210987",
          "State": "Kerala",
          "Marks":  0.9
        },
        {
          "RollNo": 5,
          "Name": "Chris",
          "Gender": "male",
          "Age": 26,
          "Location": "Alappuzha",
          "Phone": "5432109876",
          "State": "Kerala",
          "Marks": 0.92
        },
        {
          "RollNo": 6,
          "Name": "Mia",
          "Gender": "female",
          "Age": 23,
          "Location": "Kollam",
          "Phone": "4321098765",
          "State": "Kerala",
          "Marks": 0.65
        },
        {
          "RollNo": 7,
          "Name": "David",
          "Gender": "male",
          "Age": 25,
          "Location": "Palakkad",
          "Phone": "3210987654",
          "State": "Kerala",
          "Marks":0.2
        },
        {
          "RollNo": 8,
          "Name": "Sophia",
          "Gender": "female",
          "Age": 29,
          "Location": "Idukki",
          "Phone": "2109876543",
          "State": "Kerala",
          "Marks": 0.7
        },
        {
          "RollNo": 9,
          "Name": "Michael",
          "Gender": "male",
          "Age": 30,
          "Location": "Kannur",
          "Phone": "1098765432",
          "State": "Kerala",
          "Marks": 0.85
        },
        {
          "RollNo": 10,
          "Name": "Emma",
          "Gender": "female",
          "Age": 21,
          "Location": "Pathanamthitta",
          "Phone": "0987654321",
          "State": "Kerala",
          "Marks": 0.8
        }
      ]     
    
  }

// pipe for date
  public currentdate:Date= new Date();
  // currency pipe
  public decimalNumber:number= 12500.0865;
  public examfee:number= 550.056575;

}
