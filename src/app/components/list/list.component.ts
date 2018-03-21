import { Component, OnInit } from '@angular/core';
import { ItemGameService } from '../../services/item-game.service';
import { ItemGame } from '../../classes/itemGame';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  itemsGame:  ItemGame[] = [];

  constructor(private itemGameService: ItemGameService, private router: Router) { 
    this.itemsGame = this.itemGameService.getGameItem();
  }

  clickItem(item: ItemGame){
    this.router.navigate(['/detail/' + item.id]);
  }
  
  ngOnInit() {
  }

}
