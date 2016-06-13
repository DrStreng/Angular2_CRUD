import {Injectable} from "angular2/core";
import {Typ} from "./type";
import {Http,HTTP_PROVIDERS,Headers} from "angular2/http"

@Injectable()
export class TypeService{
  constructor(private http: Http) {}

  addType(typ : Typ){
    var headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post('/leks/addType', JSON.stringify(typ), {headers: headers})
    .map(response => response.json());
  };
  getTypes(){
    var headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.get('/leks/getTypes', {headers: headers})
    .map(response => response.json());
  }
  removeTyp(typ:Typ){
    var headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('/leks/removeTyp',JSON.stringify(typ),{headers:headers})
    .map(response => response.json());
  }
  updateTyp(name,_id){
    var headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('/leks/updateTyp',JSON.stringify({name:name,_id:_id}),{headers:headers})
    .map(response => response.json());
  }
}
