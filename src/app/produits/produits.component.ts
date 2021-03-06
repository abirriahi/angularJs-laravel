import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

  export class ProduitsComponent implements OnInit {
  produits : Produit[];
  constructor(private produitService: ProduitService ,private router :Router) {
   // this.produits = produitService.listeProduit;
    }
  
  /*  ngOnInit(): void {
  }*/
  ngOnInit(): void {
    this.produitService.listeallProduit().subscribe(prods => {
     // console.log(prods);
      this.produits = prods;
    });
    }



 /*supprimerProduit(p: Produit)
  {
    
    //console.log(p);
 let conf = confirm("Etes-vous sûr ?");
 if (conf)
  this.produitService.supprimerProduit(p);
   
  }*/
  
  /******************/
  supprimerProduit(p: Produit)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
console.log("produit supprimé");
this.SuprimerProduitDuTableau(p);
});
}


SuprimerProduitDuTableau(prod : Produit) {
this.produits.forEach((cur, index) => {
if(prod.idProduit=== cur.idProduit) {
this.produits.splice(index, 1);
}
});
}
  
  /*****************/
  
  
  
}
