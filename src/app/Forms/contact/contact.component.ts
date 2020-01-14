import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../Forms/Helpers';
import { Profile } from '../../Forms/Helpers';
import { Technology } from '../../Forms/Helpers';
import { User } from '../../Forms/Helpers';

@Component({
  selector: 'app-contact',
  providers: [UserService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isValidFormSubmitted:boolean = false;
  allProfiles:Profile[] = this.userService.getProfiles();
  allTechnologies:Technology[] = this.userService.getTechnologies();
  user:User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onFormSubmit(userForm: NgForm): void {
    console.log(userForm);
  }

  resetUserForm(userForm: NgForm): void {
    userForm.resetForm();
  }

  resetForm(userForm:NgForm): void {
    userForm.resetForm();
  }

  compareTech(t1: Technology, t2: Technology): boolean {
    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }

  onFormSubmit2(form:NgForm):void {
    this.isValidFormSubmitted = false;

    if (form.valid) {
      this.isValidFormSubmitted = true;
    } else {
      return;
    }

    let userName = form.controls['name'].value;
    let userProfile: Profile = form.controls['profile'].value;
    let userTechnologies: Technology[] = form.controls['selectedTechs'].value;

    let newUser:User = new User();
    newUser.userName = userName;
    newUser.profile = userProfile;
    newUser.technologies = userTechnologies;

    this.userService.createUser(newUser);

    this.resetForm(form);
  }
}
