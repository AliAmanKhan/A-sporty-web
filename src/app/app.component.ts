import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-material-new';
  months = [
    {id: 1, name: '1 Month'},
    {id: 2, name: '2 Month'},
    {id: 3, name: '3 Month'},
    {id: 4, name: '4 Month'},
    {id: 5, name: '5 Month'},
    {id: 6, name: '6 Month'},
    {id: 7, name: '7 Month'},
    {id: 8, name: '8 Month'},
    {id: 9, name: '9 Month'},
    {id: 10, name: '10 Month'},
    {id: 11, name: '11 Month'},
    {id: 12, name: '12 Month'}
  ]
  genders =[
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
    {id: 3, name: 'Others'}
  ]

  edus = [
    {id: 1, name: 'Matric'},
    {id: 2, name: 'Post Matric'},
    {id: 3, name: 'Bachelors'},
    {id: 4, name: 'Masters'},
    {id: 5, name: 'Doctorate (Phd)'}
  ]
  fields = [
    {id: 1, name: 'Computer Science'},
    {id: 2, name: 'Information Technology'},
    {id: 3, name: 'Electronics'},
    {id: 4, name: 'Mechanical'},
    {id: 5, name: 'Electrical'},
    {id: 6, name: 'Civil'},
    {id: 7, name: 'Biology'},
    {id: 8, name: 'Maths'}
  ]
  titles = [
    {id: 1, name: 'First Year Fellow'},
    {id: 2, name: 'Second Year Fellow'},
    {id: 3, name: 'Third Year Fellow'},
    {id: 4, name: 'Fourth Year Fellow'},
  ]
  roles = [
    {id: 1, name: 'Fellow'},
    {id: 2, name: 'Student'},
    {id: 3, name: 'Intern'},
  ]
  years = [
    {id: 1, name: '2021'},
    {id: 2, name: '2022'},
    {id: 3, name: '2023'},
    {id: 4, name: '2024'},
    {id: 5, name: '2025'},
    {id: 6, name: '2026'},
    {id: 7, name: '2027'},
    {id: 8, name: '2028'}
  ]
  places = [
    {id: 1, name: 'Ahemdabad'},
    {id: 2, name: 'Bangalore'},
    {id: 3, name: 'Kota'},
    {id: 4, name: 'Chennai'},
    {id: 5, name: 'Gurgaon'},
    {id: 6, name: 'Noida'},
    {id: 7, name: 'Mumbai'},
    {id: 8, name: 'Dehli'},
  ]
  deps = [
    {id: 1, name: 'Educational'},
    {id: 2, name: 'Civil'},
    {id: 3, name: 'Media'},
    {id: 4, name: 'Pharaceutical'},
  ]
  status = [
    {id: 1, name: 'Active'},
    {id: 2, name: 'Not Active'},
  ]
}
