import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../service/post/post';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
  id:any;
  posts: any[] = [];
  postService = inject(Post);
  
  
  
  
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  async ngOnInit(): Promise<void> {
    this.obtenerPosts();
  }


  async obtenerPosts(){
    this.posts = await this.postService.getPost();
  }
}
