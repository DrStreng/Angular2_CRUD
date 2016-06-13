import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http'
import {RouteConfig, Router, ROUTER_DIRECTIVES}        from 'angular2/router'
import {TypeService} from './type.service';
import {Typ} from './type';
import 'rxjs/add/operator/map';
import {FORM_DIRECTIVES,AbstractControl,FormBuilder,Validators,ControlGroup,Control} from 'angular2/common';


@Component({
    selector:    'my-app',
    templateUrl: 'components/type/AddType-form.html',
    directives:  [ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    providers:   [TypeService]
})

export class TypeComponent {
  typs : Object;
  myForm:ControlGroup;
  myVal:AbstractControl;
  serverAnswer:Object;

  constructor(public TypeService : TypeService, fb:FormBuilder) {
    TypeService.getTypes()
    .subscribe(
    response =>
    {
      if (response) this.typs = response;
    });


    this.myForm = fb.group({
        'myVal': ['', Validators.compose([
            Validators.required, this.mojslabyValidator])
        ]
    });

    this.myVal = this.myForm.controls['myVal'];

    this.myVal.valueChanges.subscribe(
        (value:string) => {
            console.log(' Value changed: ', value);
        }
    );

    this.myForm.valueChanges.subscribe(
        (value:string) => {
            console.log(' Form changed changed: ', value);
        }
    );
  }

  AddType(name:string){
    this.TypeService.addType(new Typ(name))
    .subscribe(
      response =>
      {
        if (response.success) window.location.href = "/AddType";
        if (response.error) this.serverAnswer = response;
      }
    )
  }

  mojslabyValidator(control:Control) {
      if (control.value.match(/^[\W]/)) {
          return {"valerror": true}
      }
  }

  removeTyp(name:string){
    this.TypeService.removeTyp(new Typ(name))
    .subscribe(
      response =>
      {
        if (response.success) window.location.href = "/AddType";
        if (response.error) this.serverAnswer = response;
      }
    )
  }
  UpdateTyp(name:string, _id :string){
    //console.log(name+" "+_id);
    this.TypeService.updateTyp(name,_id)
    .subscribe(
      response =>
      {
        if (response.success) window.location.href = "/AddType";
        if (response.error) this.serverAnswer = response;
      }
    )
  }

  // AddType(name:string){
  //   this.TypeService.addType(new Typ(name))
  //   .subscribe(
  //     response =>
  //     {
  //       if (response.success) window.location.href = "/AddType";
  //       if (response.error) this.serverAnswer = response;
  //     }
  //   )
  // }
}
