import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service-floder/service.service'
import { Users } from 'src/model/user';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  allusers: Users [] = []
  user:any = {}
  toggle = true
  constructor(private api:ServiceService, private router:Router ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

   }

  ngOnInit(): void {
    this.getdata();

  }
  getdata(){
    this.api.getdata()
    .subscribe((data:any)=>{
      console.log(data); 
      this.allusers = data.users

    })
    
  }

  // get one random user
  getRandomUser(){
  var index = Math.floor(Math.random()* this.allusers.length)+1;
  this.user = this.allusers[index];


  } 

  // to refers the page
  random(){
    this.getRandomUser()
    this.toggle = !this.toggle;
  }

}

  

