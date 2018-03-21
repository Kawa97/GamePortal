import { Injectable } from '@angular/core';
import { ItemGame } from '../classes/itemGame';

@Injectable()
export class ItemGameService {

  private itemsGame = [new ItemGame("1", "../assets/naruto.jpg", "Naruto", "Picchia duro, Storia, Sentimentale, Arcade", 49.90),
                       new ItemGame("2", "../assets/op.jpg", "One Piece", "Picchia duro, Storia, Arcade", 39.90),
                       new ItemGame("3", "../assets/dbz.jpg", "Dragon Ball", "Picchia duro, Arcade", 29.90)]

  constructor() { }

  getGameItem(): ItemGame[]{
    return this.itemsGame;
  }
  
  getGameById(id: string){
    for(let item of this.itemsGame){
        if(item.id == id){
            return item;
        }
    }
    return null;
}

}
