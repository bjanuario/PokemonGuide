import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from '../api/models/pokemon';
import {PokemonControllerService} from '../api/services/pokemon-controller.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';
import PokemonImg from 'pokemon-images';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  private filterOrder = 'ASC';

  public button;
  public currentRecords = 10;
  public skipRecords = 0;
  public showCurrentRecords: number;
  public name: string;
  public nrOfRecords: number;
  public initialPagination = true;
  public havePagination: boolean;

  constructor(public pokemonService: PokemonControllerService, private modalService: NgbModal) {
  }

  pokemons: any = [];
  createPokemon: Pokemon;

  ngOnInit(): void {
    this.getPokemonsCount();
  }

  /**
   * Method to open a modal with pokemon information
   * @param dataPok: {any} - data array of pokemons
   */
  open(dataPok: any) {
    const nameOfPokemon = dataPok.name.toLowerCase();
    dataPok.url = PokemonImg.getSprite(nameOfPokemon);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = dataPok;
  }

  /**
   * Method to get all pokemons into a object array
   */
  getPokemons() {
    this.pokemonService.find().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  /**
   * Method to delete all records on database
   */
  deleteAll(): void {
    this.pokemonService.find().subscribe(pokemons => {
      this.pokemons = pokemons;
      this.pokemons.forEach(pokemon => {
        this.pokemonService.deleteById({id: pokemon.id}).subscribe();
      });
      this.pokemonService.fillDatabase();
    });
  }

  /**
   * Method to count the number of records into database
   */
  getPokemonsCount(): void {
    this.pokemonService.count().subscribe(nrPokemons => {
      this.nrOfRecords = nrPokemons.count;
      if (this.nrOfRecords < 1) {
        this.deleteAll();
      }
      this.getPokemonsWithPagination('next');
    });
  }

  /**
   * Method to get pokemons using pagination
   */
  getPokemonsWithPagination(position: string): void {
    this.havePagination = true;
    if (!this.initialPagination && position === 'next') {
      if (this.skipRecords < this.nrOfRecords && this.currentRecords + 10 <= this.nrOfRecords) {
        this.skipRecords = this.skipRecords + 10;
      } else if (this.initialPagination && position === 'next') {
        this.skipRecords = this.skipRecords + (this.nrOfRecords - this.skipRecords);
      }
    }
    if (position === 'previous') {
      if (this.skipRecords < 10) {
        this.skipRecords = 10;
      }
      this.skipRecords = this.skipRecords - 10;
    }
    if (this.skipRecords + 10 <= this.nrOfRecords) {
      this.showCurrentRecords = this.skipRecords + 10;
    } else {
      this.showCurrentRecords = this.nrOfRecords;
    }
    this.pokemonService.getWithPagination(10, this.skipRecords).subscribe(pokemons => {
      this.pokemons = pokemons;
      this.initialPagination = false;
    });
  }

  /**
   * Method to handle pokemon as favourite
   * @param id: {string} -Id of the pokemon to be selected
   * @param value: {boolean} - The value to set if the current pokemon should be true or false
   */
  updatePokemon(id: string, value: boolean) {
    this.pokemonService.updateById({id, body: {favourite: value}}).subscribe(res => {
      console.log(res);
    });
  }

  /**
   * Method to get pokemon by its id
   * @param id: {string} - Id of the desired pokemon
   */
  getPokemonsById(id: string): void {
    this.pokemonService.findById({id}).subscribe(pokemon => {
      this.pokemons = [pokemon];
    });
  }

  /**
   * Method to search pokemons by its types
   * @param type: {string} - The type value to be search
   * @param text: {string} - The text to be found}
   */
  searchBy(type: string, text: string) {
    this.havePagination = false;
    this.pokemonService.searchBy(type, text).subscribe(result => {
      this.pokemons = result;
    });
  }

  /**
   * Method to filter pokemon by type
   * @param type: {string} - The type characteristic of pokemon to be search
   */
  filterBy(type: string) {
    this.havePagination = false;
    if (this.filterOrder === 'ASC') {
      this.pokemonService.filterBy(type, 'ASC').subscribe(result => {
        this.pokemons = result;
        this.filterOrder = 'DESC';
      });
    }

    if (this.filterOrder === 'DESC') {
      this.pokemonService.filterBy(type, 'DESC').subscribe(result => {
        this.pokemons = result;
        this.filterOrder = 'ASC';
      });
    }
  }

  /**
   * Method to toggle a pokemon as favourite
   * @param element: {ElementTarget} - The selected element
   * @param mark: {string} - The string to be shown
   * @param pokemonId: {string} - Id of the pokemon to be (u)selected as favourite
   */
  makeItFavourite(element: EventTarget, mark: string, pokemonId: string) {
    if (mark === 'mark') {
      this.button = element;
      this.button.textContent = 'I am your favourite';
      this.button.style.backgroundColor = 'lightyellow';
      this.updatePokemon(pokemonId, true);
    }
    if (mark === 'unmark') {
      this.button = element;
      this.button.textContent = 'I am not your favourite';
      this.button.style.backgroundColor = 'transparent';
      this.updatePokemon(pokemonId, false);
    }
  }

  /**
   * Method to create a new pokemon
   */
  createPokemons(): void {
    let newPokemon: Pokemon;
    newPokemon = {
      id: 'angular',
      name: 'ewefwef',
      classification: 'string',
      types: [
        'string'
      ],
      resistant: [
        'string'
      ],
      weaknesses: [
        'string'
      ],
      weight: {},
      height: {},
      fleeRate: 0,
      evolutionRequirements: {},
      evolutions: [
        {}
      ],
      favourite: false,
      maxCP: 0,
      maxHP: 0,
      attacks: {},
      additionalProp1: {}
    };
    this.pokemonService.create({body: newPokemon}).subscribe(res => console.log(res));
  }

  /**
   * Method to refresh the window
   */
  refresh(): void {
    window.location.reload();
  }

  ngOnDestroy() {
  }
}
