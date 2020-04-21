
export class Recipe{
 public   name:string;
 public price:number
 public description:string
 public imageUrl:string

constructor(name:string,price:number,
    description:string,imageUrl:string){
    this.name=name
    this.price=price    
    this.description=description
    this.imageUrl=imageUrl

}
}