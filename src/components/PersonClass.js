class Person {
  constructor(name, weight, adress) {
    this.name = name;
    this.weight = weight;

    this.adress = adress;
  }
  get personName() {
    return this.name;
  }
  set personName(newname) {
    this.name = newname;
  }
  get fullData() {
    return `Name: ${this.name}, weight: ${this.weight}, adress: ${this.adress}`;
  }
  set fullData(dataString) {
    let stringArr = dataString.split(", ");
    if (stringArr.length === 3) {
      this.name = stringArr[0];
      this.weight = stringArr[1];
      this.adress = stringArr[2];
    }
  }
}
let p1 = new Person("Petar Petrovic", 189, "ABC");
console.log(p1.adress);
