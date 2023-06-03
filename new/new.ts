const getUser = (): undefined => {};

type UserType = {
  id: number;
  name: string;
};

class User {
  private _id: number | undefined;

  get id(): number | undefined {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }
}
