import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/Models/Chambre';
import { TypeChambre } from 'src/Models/TypeChambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit{
  displayedColumns: string[] = ['identifiant chambre', 'numero de la chambre', 'type du chambre','actions'];
  dataSource: Chambre[] = [];

  constructor(private chambreService: ChambreService ,  private route : Router ){

  }

  ngOnInit(): void {
    this.chambreService.getChambres().subscribe(data =>{
      this.dataSource = data;
      console.log(data)
    })
  }

  /*

  getEnumLabel(value: string): string {
    return TypeChambre[value as keyof typeof TypeChambre];
  } */


  /*
  deleteFoyer(idFoyer: number){
    if (confirm('Are you sure you want to delete this foyer?')) {
      this.foyerService.deleteFoyer(idFoyer).subscribe(
       {
        next : ()=> this.dataSource = this.dataSource.filter((u) => u.idFoyer !== idFoyer)
       }
      );
    }
  }  */


  /*
  updateChambre(id: number) {
    this.route.navigate(['ui-components/foyer-update-form', id]);
  }  */


}
