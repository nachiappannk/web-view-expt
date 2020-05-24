import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.css']
})
export class HospitalInfoComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    private route: ActivatedRoute, private router: Router  ) {}

  Hospital1(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    this.router.navigate(['/narayana']);
    
 }

 Hospital2(event) { 
  //just added console.log which will display the event details in browser on click of the button.
  this.router.navigate(['/fortis']);
}

Hospital3(event) { 
  //just added console.log which will display the event details in browser on click of the button.
  this.router.navigate(['/manipalLogin']);
  
}


}
