import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productsData } from '../../dashboard/dashboard.component';
import { Universite } from 'src/Models/Universite';
import { UniversiteService } from 'src/app/services/universite.service';




  


@Component({
  selector: 'app-universite-data',
  templateUrl: './universite-data.component.html',
  styleUrls: ['./universite-data.component.scss']
})
export class UniversiteDataComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'nom universite', 'adresse', 'actions' , 'update'];
  dataSource : Universite[] = [];
  

  constructor(private univSer: UniversiteService , private router : Router ) {}


  navigateToUpdatePage(id: number): void {
    this.router.navigate(['ui-components/update', id]);
  }
  
  
  ngOnInit(): void {
  this.univSer.getUniversite().subscribe(data => {
    this.dataSource=data;
    console.log(data);
  })
  }

  // Exemple de méthode pour naviguer vers la page d'édition avec un ID spécifié
  


  onDeleteButtonClick(id: number) {
    this.univSer.DeleteUniversite(id).subscribe(
      () => {
        
        this.dataSource = this.dataSource.filter((u) => u.idUniversite !== id);
      },
      (error: any) => {
        console.error('Error deleting universite:', error);
        
      }
    );
  }
  

  

}
