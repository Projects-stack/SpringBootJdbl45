import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private userService:UserService){}


  ngOnInit(): void {


    this.userService.getAllUser().subscribe(res=>{
      // console.log(data)
      let data = res[0]
      console.log(data.id)
      localStorage.setItem("user",data.id)
    })

  }
  title = 'shopping-cart';
}
