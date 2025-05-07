import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../core/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterModule,
    CommonModule
  ],
  providers:[UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{

  public userlist:any=[];
  private allList:any;
  constructor(private userService:UserService) {}
  
  ngOnInit(): void {
    this.userService.getUserList().subscribe((res:any)=> {
      if(res) {
        this.userlist = res;
        this.allList = res;
      }
    })
  }

  searchByName(event:string) {
    this.userlist = this.allList.filter((val:any) => (val.name.includes(event)))
  }
}
