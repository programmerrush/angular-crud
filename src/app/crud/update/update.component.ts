import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  post: any;

  constructor(public ar: ActivatedRoute, private http: HttpClient, private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {

    this.ar.params.subscribe(params => {
      let id = params['id'];

      console.log(id)

      this.http.get<any>('https://my-json-server.typicode.com/programmerrush/api-server/posts/' + id).subscribe(data => {
        this.post = data;
        console.log(this.post)

        // this.createForm(this.post.id, this.post.userId, this.post.title, this.post.body)
        // this.profileForm.id.setValue = this.post.id;


        this.profileForm = this.fb.group({
          id: [this.post.id, Validators.required],
          userId: [this.post.userId, Validators.required],
          title: [this.post.title, Validators.required],
          body: [this.post.body, Validators.required],
        });

      })

      // console.log(`${id}`);
    });

  }
  profileForm: any;


  //   {
  //     "userId": 2,
  //     "id": 11,
  //     "title": "et ea vero quia laudantium autem",
  //     "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  // }

  createForm() {
    this.profileForm = this.fb.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    this.http.put('https://my-json-server.typicode.com/programmerrush/api-server/posts/' + this.post.id, this.profileForm.value)
      .subscribe(data => {
        console.log(data)

        let ddd = JSON.stringify(data)
        let ddd2 = JSON.parse(ddd)

        alert("Updated post #" + ddd2.id)

      })

  }


}