import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';
import { Foyer } from 'src/Models/Foyer'

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.scss']
})
export class FoyerComponent implements OnInit {

  displayedColumns: string[] = ['identifiant foyer', 'nom du Foyer', 'capacite du foyer','Taux de capacité du foyer','Actions'];
  dataSource: Foyer[] = [];

  constructor(private foyerService: FoyerService ,  private route : Router ){

  }

  ngOnInit(): void {
    this.foyerService.getFoyers().subscribe(data =>{
      this.dataSource = data;
      console.log(data)
    })
  }

  deleteFoyer(idFoyer: number){
    if (confirm('Are you sure you want to delete this foyer?')) {
      this.foyerService.deleteFoyer(idFoyer).subscribe(
       {
        next : ()=> this.dataSource = this.dataSource.filter((u) => u.idFoyer !== idFoyer)
       }
      );
    }
  }

  updateFoyer(id: number) {
    this.route.navigate(['ui-components/foyer-update-form', id]);
  }


  


  
 

}
