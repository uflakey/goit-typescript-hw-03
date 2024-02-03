class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }
  abstract openDoor(key: Key);
}
class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature === key.getSignature) this.door = true;
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};