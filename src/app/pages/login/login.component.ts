import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
isloginview: boolean =false ;
userRegistrationObj : any ={
  userName: '',
  userId :'',
  userPassword :''
};
router = inject(Router);

// else {
//   const localArray =[];
//   localArray.push(this.userRegistrationObj);
//   localStorage.setItem("ang18data",JSON.stringify(localArray));
// }

userLoginObj: any  ={
  userId: '',
  userPassword: ''
};
OnLogin(){
  const isLocalData = localStorage.getItem("ang18data");
if(isLocalData != null){
const users = JSON.parse(isLocalData);
const isUserFound = users.find((m:any)=> m.userPassword == this.userLoginObj.userPassword && m.userId == this.userLoginObj.userId);
if(isUserFound != undefined)
{
// this.router.navigateByUrl('https://responsive-temp.vercel.app/#')
window.location.href = ('https://responsive-temp.vercel.app/#');
alert("Login Successfull");
}
else
{
  alert("the User Name or Password is wrong")
}
}
}
OnRegister(){
const isLocalData = localStorage.getItem("ang18data");
if(isLocalData != null){
const localArray = JSON.parse(isLocalData);
localArray.push (this.userRegistrationObj)
localStorage.setItem("ang18data",JSON.stringify(localArray));
}
else {
  const localArray =[];
  localArray.push(this.userRegistrationObj);
  localStorage.setItem("ang18data",JSON.stringify(localArray));
}
alert("Registration successful")
}
}
