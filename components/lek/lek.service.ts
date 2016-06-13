import {Injectable} from "angular2/core";
import {Lek} from "./lek";
import {Http,HTTP_PROVIDERS,Headers} from "angular2/http";

@Injectable()
export class LekService{
  constructor(private http:Http){}
  addLek(lek :Lek){
    var headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('/leks/addLek',JSON.stringify(lek),{headers:headers})
    .map(response => response.json());
  };

  getLeks(){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('/leks/getLeks',{headers:headers})
    .map(response => response.json());
  };

  removeLek(lek:Lek){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('/leks/removeLek',JSON.stringify(lek),{headers:headers})
    .map(response => response.json());
  }
  EditLek(name,typId,cost,_id){
    var headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('/leks/EditLek',JSON.stringify({name:name,_id:_id,cost:cost,typId:typId}),{headers:headers})
    .map(response => response.json());
  }
}
