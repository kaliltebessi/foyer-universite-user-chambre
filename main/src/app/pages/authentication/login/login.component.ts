import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit {
  myForm: FormGroup;
 

  constructor(private router: Router , private fb:FormBuilder, private userSer: UserService, private ac : ActivatedRoute) {}
 
 
  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
     
    });
  }

  onSubmit(){
    const formData: User = this.myForm.value; 
    console.log(formData);
    
  
    this.userSer.loginuser(formData).subscribe({
      next:()=> {
        
        alert("Login successful");
        this.userSer.getrolebyusername(formData.username)
                .subscribe({
                      next: 
                      (role) => { console.log(role);
                      
                      if(role ==='admin'){  this.router.navigate(['/dashboard']);             
                    }else{
                      this.router.navigate(['/ui-components/badge'])
                    }
                    

                      
                      
                      
                      }  })

       
        
      },

      error:(error)=>{console.log(error)}             
      
   

  
});
  }



      /*

      data => {
        
        alert("Login successful");
          this.userSer.getrolebyusername(formData.username)
    .subscribe({
      next: (role) => {
        
        console.log(role);
      }
      
    });
  
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error("Login error", error);
        alert("Login failed");
      }
    );*/

  


}
