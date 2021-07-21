import {Component, OnChanges, OnInit} from '@angular/core';
import {ApiService} from "../Services/api.service";
import {Pokemon} from "../Models/pokemon";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  public pokemons:Pokemon[] = [];
  constructor(private api: ApiService) {
    this.api.getPokemonsList().then(pokemons => {
      this.pokemons = pokemons
      console.log(this.pokemons)
    })
  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    console.log(this.pokemons)
  }

}
