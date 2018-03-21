import { Component, OnInit } from '@angular/core';
import { ItemGameService } from '../../services/item-game.service';
import { ItemGame } from '../../classes/itemGame';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  itemsGame:  ItemGame[] = [];

  constructor(private itemGameService: ItemGameService) { 
    this.itemsGame = this.itemGameService.getGameItem();
  }

  ngOnInit() {
  }

}
