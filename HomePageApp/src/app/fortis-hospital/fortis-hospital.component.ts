import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-fortis-hospital',
  templateUrl: './fortis-hospital.component.html',
  styleUrls: ['./fortis-hospital.component.css']
})
export class FortisHospitalComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  Hospital(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    this.router.navigate(['/hospital']);
  }
  HospitalInfo(event)
  {
    alert("asdasd");
    this.router.navigate(['/fortis-info']);
  }
}
