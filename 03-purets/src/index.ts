/*
class User {
  public email: string;
  private name: string;
  readonly city: string = "nairobi";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
*/

class User {
  protected _courseCount = 1;

  readonly city: string = "nairobi";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Invalid course count");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this.courseCount = 10;
  }
}

const hitesh = new User("h@h.com", "Hitesh");
hitesh.city;
