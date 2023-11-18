import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent implements OnInit {


  myForm: FormGroup;

  constructor(private router: Router , private fb:FormBuilder, private userSer: UserService, private ac : ActivatedRoute) {}
  ngOnInit(): void {
   this.initForm();
  }

  

  initForm() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }


  


  onSubmit(){

    const formData: User = this.myForm.value; 
      console.log(formData);
this.userSer.ajouteruser(formData).subscribe(
  (response) => {
    console.log('User ajoutée avec succès:', response);
    
  },
  (error) => {
    console.error('Erreur lors de l\'ajout de l\'user:', error);
    
  }
);
  }




  

  //submit() {
    // console.log(this.form.value);
    //this.router.navigate(['/dashboard']);
  //}
}
