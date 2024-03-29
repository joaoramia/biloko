import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {
  n: string;
  p: string;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  login(){
      console.log('clicked', this.n, this.p)
      this.adminService.login(this.n, this.p);
  }

}
