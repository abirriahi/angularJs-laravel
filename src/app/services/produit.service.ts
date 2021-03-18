import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8080/produits/api';
  
  produits : Produit[]; //un tableau de Produit
  consulterproduit: Produit;
  constructor(private http : HttpClient) {

    /*this.produits = [
      { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.1, dateCreation: new Date("01/14/2011")},
      { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450.2,  dateCreation : new Date("12/17/2010")},
      { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.3, dateCreation : new Date("02/20/2020")}
      ];*/

   }
   
   
  /*consulterProduit(id:number): Produit{
    this.consulterproduit = this.produits.find(p => p.idProduit == id);
    return this.consulterproduit; 
    }*/
	
	consulterProdui(id: number): Observable<Produit> {
const url = `${this.apiURL}/${id}`;
return this.http.get<Produit>(url);
}

    listeallProduit(): Observable<Produit[]>{
      return this.http.get<Produit[]>(this.apiURL);
      }
  /* listeProduit():Produit[]
    {
      return this.produits;
   }*/
   
   
   
   
  ajouterProduit( prod: Produit):Observable<Produit>{
return this.http.post<Produit>(this.apiURL, prod, httpOptions);
}
   
 
   
   //supprimerProduit( prod: Produit)
   supprimerProduit(id : number)
   {
    
	const url = `${this.apiURL}/${id}`;
	
	return this.http.delete(url, httpOptions);
	
	
	
    /*const index = this.produits.indexOf(prod, 0);
    if (index > -1)
     {
    this.produits.splice(index, 1);
    }*/
    }
    
     
     

      /*  updateProduit(p:Produit)
        {
           // console.log(p);
          this.supprimerProduit(p.idProduit);
          this.ajouterProduit(p);
          this.trierProduits();
        }*/
		updateProduit(prod :Produit) : Observable<Produit>
{
return this.http.put<Produit>(this.apiURL, prod, httpOptions);
}
        
      trierProduits(){
        this.produits = this.produits.sort((n1,n2) => {
        if (n1.idProduit > n2.idProduit) {
        return 1;
        }
        if (n1.idProduit < n2.idProduit) {
        return -1;
        }
        return 0;
        });
        }

}
