import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = 'd27f55bb18f8475299781bf1df8cc23c';

  constructor() { }
}
