import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.showAllUsers()
  }
  Users!:any;

  showAllUsers(){
    this.apiService.getUsers().subscribe({
      next:(value)=>{
        console.log(value);
        this.Users = value.users
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    
  }
}
