import { Component, OnInit } from '@angular/core';
import { ItemGame } from '../../classes/itemGame';
import { ItemGameService } from '../../services/item-game.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.css']
})
export class DetailGameComponent implements OnInit {

  game: ItemGame;

  constructor(private router: Router, private route: ActivatedRoute, private gameItemService: ItemGameService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id'] != '' && params['id'] != null){
        this.game = this.gameItemService.getGameById(params['id']);
      }
    });
  }

}
