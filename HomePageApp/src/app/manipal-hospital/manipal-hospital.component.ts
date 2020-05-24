import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-manipal-hospital',
  templateUrl: './manipal-hospital.component.html',
  styleUrls: ['./manipal-hospital.component.css']
})
export class ManipalHospitalComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  Hospital(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    this.router.navigate(['/hospital']);
  }
}
