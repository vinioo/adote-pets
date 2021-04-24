import { Pet } from "../models/pet.model";
import firebase from "../credencial";

const firestore = firebase.firestore();

 class PetService {
 
  public getAllPets() {
    return firestore.collection('pet').get();
  }

  public getPetById(id: number) {
    return firestore
      .collection("pet")
      .doc("id")
      .get()
      .then((user) => {
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
    return firestore.collection('pet').add(item);
  }

  public deletePet(id: number) {
    return firestore.doc(`pet/${id}`).delete()
  }

  public editarPet(item: Pet) {
    return firebase.firestore().collection('pet').doc(`pet/${item.id}`).update(item)
  }
}

export default new PetService();