import {Injectable} from '@angular/core';
import {Heroes} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs'
import {MessageService} from './app-messages/message.service';
@Injectable({
  providedIn:"root",
})
export class HeroService{
  constructor(private messageService:MessageService){
    
  }
  // getHeroes():Hero[]{
  //   return Heroes;
  // }
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(Heroes);
  }
}