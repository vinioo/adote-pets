import { User } from "../models/user.model";
import firebase from "../credencial";

const firestore = firebase.firestore();

class UserService {
  
  public getAllUsers() {
    return firestore.collection("user").get();
  }


  public validaUser(email:string,password:string) {
    return firestore.collection("user")
    .where("email","==",email)
    .where("password","==",password).get();
  }

  public getUserById(id: number) {
    return firestore
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

  public addUser(item: User) {
    delete item.id;
    return firestore.collection('user').add(item);
  }

  public deleteUser(id: string) {
   return firestore.doc(`user/${id}`).delete()
  }

  public editarUser(item: User) {
    return firebase.firestore().collection('user').doc(`user/${item.id}`).update(item)
  }
}

export default  new UserService()