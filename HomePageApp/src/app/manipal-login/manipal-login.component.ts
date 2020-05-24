import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-manipal-login',
  templateUrl: './manipal-login.component.html',
  styleUrls: ['./manipal-login.component.css']
})
export class ManipalLoginComponent implements OnInit {

  val: string ="sds"
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  LoginModel(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    document.getElementById('id01').style.display='block'
    //this.router.navigate(['/hospital']);
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
    }

    RouteScreen(event){
      var   username= ((document.getElementById("username") as HTMLInputElement).value);
      var   password= ((document.getElementById("password") as HTMLInputElement).value);
      if( username == "admin" && password == "admin")
      {
         this.router.navigate(['/manipal']);
      }
      else
      {
        alert("User name or password is wrong");
      }
    }
  
}
