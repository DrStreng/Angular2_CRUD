export class Lek{
  constructor(
    name?:string,
    typeId?:string,
    cost?:number
  ){
    this.name = name;
    this.typeId =typeId;
    this.cost = cost;
  }
  name:string;
  typeId:string;
  cost:number;
}
