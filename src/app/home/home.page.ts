import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'Firebase';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { FormBuilder,FormGroup, FormControl,Validator } from '@angular/forms';
//import {snapshotToArray } from '../app/environments/environment';
//import { environment } from '../environments/environment';

import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
dataToAdd;
item : any;
items ;
fname: string;
lname: string = "updated";
phno: number;
email: string = "priya@yadhav.com";
update : string;
updates : string;
key : any ;

//value : Observable<any[]>;
private dbPath = '/signup';
customersRef: AngularFireList<any> = null;

  constructor(public navCtrl: NavController,
    public afd:AngularFireDatabase,
    private fb : FormBuilder) {
       this.afd.list('signup/').valueChanges().subscribe(data =>{
     console.log(data);
      //this.item = data
      var item = data ;
        var key = Object.keys(item);
        console.log(key);
    });
   
    this.customersRef = afd.list(this.dbPath); }
    clist : AngularFireList<any>;

    myform = new FormGroup({
      email : new FormControl(''),
      fname : new FormControl(''),
      lname : new FormControl(''),
      phno : new FormControl('')
    })

    getData(){
      this.afd.list('signup/').valueChanges().subscribe(data =>{
        //console.log(data);
        var item = data ;
        var key = Object.keys(item);
        //console.log(key);

      });
    }

    /*data(){
      this.clist = this.afd.list('customers');
    return this.clist.snapshotChanges();
    } */

    addData(value){

      let dat = Object.assign({}, value);
  var data = {
  Email:this.dataToAdd,
  firstname:this.fname,
  lastname:this.lname,
  mobile:this.phno

};
      //console.log(dat)
      this.afd.list('signup/').push(dat);
      
      
    }
   
    filters = {}
    filteredAnimals: any;
    
     
      private applyFilters() {
        this.filteredAnimals = _.filter(this.item, _.conforms(this.filters) )
        console.log(this.filteredAnimals())

       //this.item = snapshotToArray(this.filteredAnimals)
      }
    
      
      filterExact(property: string, rule: any) {
        this.filters[property] = val => val == rule
        this.applyFilters()
      }
    
    updat(){
      this.filterExact('email','thomasedison084@gmail.com');
    }
        
     
      
     /*createCustomer(customer: Customer): void {
      this.customersRef.push(customer);
    } */
   
    updateCustomer(keys) {
      alert(keys+"from update ");
      
      let dat = keys;

      alert(dat);
     this.customersRef.update(keys[0], {lname : 'im changed'});
      console.log('thomas');
    }



   
    deleteCustomer(key: any) {
     this.customersRef.remove(key);
      console.log('deleted');
    }
    
    search(){
      const db = firebase.database();
      const signup = db.ref('/signup');
      const query = signup.orderByChild('email').equalTo('joseph@gmail.com');

      query.on('value',snap => {
        console.log(snap.val())
        var data = snap.val();
        var keys = Object.keys(data);
        console.log(keys);
        this.key = keys ;
        console.log("just a check")
        console.log(this.key)
        alert(this.key + " from search");
       this.updateCustomer(this.key);
       //this.delete(keys);
      });
      //this.updateCustomer(keys);

    }

    delete(){
      console.log(this.key);

      this.afd.list('/singup').remove('-LpavVzZ0u2VSsrWHU8p');
      
    }

}
