import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http'
import {RouteConfig, Router, ROUTER_DIRECTIVES}        from 'angular2/router'
import {TypeService} from '../type/type.service'
import {LekService} from './lek.service'
import {Lek} from './lek'
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    templateUrl: 'components/lek/AddLek-form.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[TypeService,LekService]
})


export class LekComponent {
typs :Object;
leks :Object;

constructor(public TypeService : TypeService, public LekService : LekService){
  TypeService.getTypes().subscribe(
  response=>{
    if (response) this.typs =response;
  });
  LekService.getLeks().subscribe(
    response=>{
      if (response) this.leks = response;
    }
  );
}
serverAnswer:Object;

removeLek(name:string){
  this.LekService.removeLek(new Lek(name))
  .subscribe(
    response =>
    {
      if (response.success) window.location.href = "/AddLek";
      if (response.error) this.serverAnswer = response;
    }
  )
}
EditLek(name:string,typId:string,cost:number,_id:string){
  this.LekService.EditLek(name,typId,cost,_id)
  .subscribe(
    response =>
    {
      if (response.success) window.location.href = "/AddLek";
      if (response.error) this.serverAnswer = response;
    }
  )
}

AddLek(name:string,typeId:string,cost:number){
    this.LekService.addLek(new Lek(name,typeId,cost))
    .subscribe(
      response =>
      {
        if (response.success) window.location.href = "/AddLek";
        if (response.error) this.serverAnswer = response;
      }
    )
  }
}
