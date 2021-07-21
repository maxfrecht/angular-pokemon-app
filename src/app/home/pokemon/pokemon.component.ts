import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../Models/pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() public pokemon!: Pokemon;
  constructor() { }

  ngOnInit(): void {
  }

}
