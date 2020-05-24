import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-fortis-more-info',
  templateUrl: './fortis-more-info.component.html',
  styleUrls: ['./fortis-more-info.component.css']
})
export class FortisMoreInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  Hospital(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    this.router.navigate(['/fortis']);
  }

}
