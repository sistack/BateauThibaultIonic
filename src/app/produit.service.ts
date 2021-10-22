import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';  
interface UnproduitObj {
  id: string,
  name: string, 
  category: number,
  price: number,
  unit: string,
  availability: boolean,
  sale: boolean,
  discount: number,
  comments: string,
  owner: string
}
interface ItemsResponse {
  produits: Array<UnproduitObj>;
}

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  liste = []
  constructor(public http: HttpClient) {

  }
  addList(produit) {
    this.liste.push(produit);
  }

  removeList(produit) {
    this.liste = this.liste.filter(a => produit.id !== a.id);
  }

  isInList(produit) {
    let result = this.liste.filter(a => produit.id === a.id).length;
    return result > 0;
  }
  getFichier() {
    return this.http.get<ItemsResponse>('../assets/data/listeProduit.json')
  }

  getListe(){
    return this.liste;
  }
   
}
