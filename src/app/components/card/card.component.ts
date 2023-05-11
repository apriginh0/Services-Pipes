import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData;
  attributesTypes:string[] = ['ELECTRIC', 'GRASS', 'GROUND', 'PSYCHIC',]

  constructor(
    private service:PokemonService
  ){
    this.pokemon = {
      id:0,
      name:'',
      sprites:{
        other:{
          dream_world:{
            front_default:''
          }
        }
      },
      types:[]
    };
  }

  ngOnInit(): void {
    this.encontrePokemon('pikachu')
  };

  encontrePokemon(searchName:string){
    this.service.getPokemon(searchName.toLowerCase()).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name.toUpperCase(),
            sprites: res.sprites,
            types: res.types
          }
          console.log(res.id);

        },
        error: (err) => console.log(err)
      }
    )
  }

}
