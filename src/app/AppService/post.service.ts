import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient:HttpClient) { }
  getPosts(){
    return this.HttpClient.get('https://fakestoreapi.com/products');
  }
}
