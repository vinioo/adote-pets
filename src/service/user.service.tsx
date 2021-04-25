import { User } from "../models/user.model";
import firebase from "../credencial";

class UserService {
  constructor(private firestore = firebase.firestore()) {}

  public getAllUsers() {
    return this.firestore.collection("user").get();
  }

  public async login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public async registerUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  public addUser(item: User) {
    return this.firestore.collection("user").add(item);
  }

  public getUserById(id: number) {
    return this.firestore
      .collection("user")
      .doc("id")
      .get()
      .then((user) => {
        if (user.exists) {
          return {
            id: user.id,
            email: user.data()?.email,
            password: user.data()?.password,
            telefone: user.data()?.telefone,
            imagem: user.data()?.imagem,
          };
        } else {
          return {
            id: null,
            email: "",
            password: "",
            telefone: "",
            imagem: "",
          };
        }
      });
  }

  public deleteUser(id: string) {
    return this.firestore.doc(`user/${id}`).delete();
  }

  public editarUser(item: User) {
    return this.firestore.collection("user").doc(`user/${item.uid}`).update(item);
  }
}

export default new UserService();
