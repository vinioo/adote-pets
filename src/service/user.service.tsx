import { User } from "../models/user.model";

export class UserService {
  public users: Array<User> = [{
    id: 1,
    email: "teste@teste.com",
    password: "123",
    telefone: "33445599",
    imagem: ""
  } ];

  constructor() {} 

  public getAllUsers(): Array<User> {
    return this.users;
  }

  public getUserById(id: number): User | undefined {
    for (let obj of this.users) {
      if (obj.id === id) {
        return obj;
      }
    }
  }


  public validUser(user:User): boolean {
    for (let obj of this.users) {
      if (obj.email === user.email && obj.password === user.password) {
        return true;
      }
    }
    return false;
  }


  public addUser(item: User) {
    const id: number = this.users.length + 1;
    item.id = id;
    this.users.push(item);
  }

  public deleteUser(id: number) {
    let pos = null;

    for (let i = 0; i < this.users.length; i++) {
      if (id === this.users[i].id) {
        pos = i;
        break;
      }
    }

    if (pos || pos === 0) {
      this.users.splice(pos, 1);
    }
  }

  public editarUser(item: User) {
    console.log("item", item);

    for (let obj of this.users) {
      if (item.id === obj.id) {
        obj.email = item.email;
        obj.password = item.password;
        obj.telefone = item.telefone;
        obj.imagem = item.imagem;

        break;
      }
    }
  }
}
