import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: any;
  deleted: any;

  constructor(public srv: ServiceService, private http: HttpClient, public route: Router) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.http.get<any>('https://my-json-server.typicode.com/programmerrush/api-server/posts').subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    })
  }

  read(id) {
    console.log(id)

    // let post = JSON.parse(this.posts)

    this.http.get<any>('https://my-json-server.typicode.com/programmerrush/api-server/posts/' + id).subscribe(data => {

      let ds = data

      Swal.fire({
        title: ds.id,
        text: ds.body,
        icon: 'success',
      })

    })


  }

  delete(id) {

    if (confirm("Are you sure to delete Post #" + id)) {
      this.http.delete<any>('https://my-json-server.typicode.com/programmerrush/api-server/posts/' + id)
        .subscribe(data => {
          this.deleted = JSON.stringify(data)
          console.log(data)
          alert(data)
        })
    } else {
      alert("Not deleted OR operation cancelled")
    }

  }

  update(id) {
    this.route.navigateByUrl("/crud/update/" + id)
  }

}
