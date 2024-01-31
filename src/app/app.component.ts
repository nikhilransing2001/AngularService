import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from './AppService/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularservice';
  apiData: any=[];
  constructor(private service:PostService){}
  ngOnInit(){
    this.callMyApi();
  }
  callMyApi(){
    this.service.getPosts().subscribe((res)=>{this.apiData=res})
  }
}
