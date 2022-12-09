import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  profileForm: any;

  constructor(private fb: FormBuilder, public http: HttpClient) {
    this.createForm()
  }

  //   {
  //     "userId": 2,
  //     "id": 11,
  //     "title": "et ea vero quia laudantium autem",
  //     "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  // }

  createForm() {
    this.profileForm = this.fb.group({
      // id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    this.http.post('https://my-json-server.typicode.com/programmerrush/api-server/posts', this.profileForm.value)
      .subscribe(data => {
        console.log(data)

        let ddd = JSON.stringify(data)
        let ddd2 = JSON.parse(ddd)

        alert("New post added at #" + ddd2.id)

      })

  }

  ngOnInit() {

  }

}