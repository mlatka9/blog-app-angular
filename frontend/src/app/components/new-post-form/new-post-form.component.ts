import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {

  public formFields = {
    title: '',
    image: '',
    text: ''
  };

  constructor(public dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addPost() {
    return this.dataService.addPost(this.formFields).subscribe((result) => {
      if (!result) {
      } else {

        this.formFields = {
          title: '',
          image: '',
          text: ''
        };
        this.router.navigate(['/']);
      }
    });
  }
}
