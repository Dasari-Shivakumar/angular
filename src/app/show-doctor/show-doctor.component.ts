import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {
  doctors:any;
  message:any;
  doctId:any;
  doctorflag:boolean=false;
  doctorinfo:any;

  
  constructor(private service:DoctorService,private router:Router) { }


   selectName(pid :number){
    this.doctorflag=true;

   

    let response= this.service.getDoctorbyId(pid);
    response.subscribe((data)=>this.doctorinfo=data);
 
    console.log("id--->",pid);
    console.log("doctors--->",this.doctorinfo.docName);
     
   }
 
  ngOnInit(): void {
    let response = this.service.getAllDoctors();
    response.subscribe((data)=>this.doctors=data);
  }
  back():void{
    this.router.navigate(['']);
  }

}
