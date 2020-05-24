import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-narayana-hospital',
  templateUrl: './narayana-hospital.component.html',
  styleUrls: ['./narayana-hospital.component.css']
})
export class NarayanaHospitalComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
  }

  Hospital(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    this.router.navigate(['/hospital']);
 }
}
