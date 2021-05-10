import { Pet } from "../models/pet.model";
import firebase from "../credencial";

class PetService {
  constructor(private firestore = firebase.firestore()) {}

  public async getAllPets() {
    const pets: Pet[] = [];
    (await this.firestore.collection("pet").get()).forEach((pet:any) => pets.push(pet.data() as Pet));
    console.log(pets);
    return pets;
  }

  public getPetById(id: number) {
    return this.firestore
      .collection("pet")
      .doc("id")
      .get()
      .then((user:any) => {
        if (user.exists) {
          return {
            id: user.id,
            tipoAnimal: user.data()?.tipoAnimal,
            nome: user.data()?.nome,
            idade: user.data()?.idade,
            imagem: user.data()?.imagem,
          };
        } else {
          return {
            id: null,
            tipoAnimal: "",
            nome: "",
            idade: null,
            imagem: "",
          };
        }
      });
  }

  public addPet(item: Pet) {
    delete item.id;
    return this.firestore.collection("pet").add(item);
  }

  public deletePet(id: number) {
    return this.firestore.doc(`pet/${id}`).delete();
  }

  public editarPet(item: Pet) {
    return this.firestore.collection("pet").doc(`pet/${item.id}`).update(item);
  }
}

export default new PetService();
