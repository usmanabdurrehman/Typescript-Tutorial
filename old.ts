const getUser = (): undefined => {};

type UserType = {
  id: number;
  name: string;
};

class User {
  private _id: number | undefined;
  static users: UserType[] = [{ id: 1, name: "Alex" }];

  get id(): string | undefined {
    return User.users.find((user) => user.id === this._id)?.name;
  }

  set id(id: number) {
    this._id = id;
  }
}
