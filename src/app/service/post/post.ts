import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Post {
  async getPost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json();
    return posts;
  }
}
