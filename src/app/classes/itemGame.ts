export class ItemGame{
    id: string;
    immagine: string;
    titolo: string;
    genere: string;
    prezzo: number;
   
    constructor(id: string = "", immagine: string = "",titolo: string = "", genere: string = "", prezzo: number = 0){
                    
       this.id = id;
       this.immagine = immagine;
       this.titolo = titolo;
       this.genere = genere;
       this.prezzo = prezzo;
    }
    
}