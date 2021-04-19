import { Pet } from "../models/pet.model";

export class PetService {
  public pets: Array<Pet> = [ ];

  constructor() {}
 
  public getAllPets(): Array<Pet> {
    return this.pets;
  }

  public getPetById(id: number): Pet | undefined {
    for (let obj of this.pets) {
      if (obj.id === id) {
        return obj;
      }
    }
  }

  public addPet(item: Pet) {
    const id: number = this.pets.length + 1;
    item.id = id;
    this.pets.push(item);
  }

  public deletePet(id: number) {
    let pos = null;

    for (let i = 0; i < this.pets.length; i++) {
      if (id === this.pets[i].id) {
        pos = i;
        break;
      }
    }

    if (pos || pos === 0) {
      this.pets.splice(pos, 1);
    }
  }

  public editarPet(item: Pet) {
    console.log("item", item);

    for (let obj of this.pets) {
      if (item.id === obj.id) {
        obj.nome = item.nome;
        obj.tipoAnimal = item.tipoAnimal;
        obj.idade = item.idade;
        obj.imagem = item.imagem;

        break;
      }
    }
  }
}
