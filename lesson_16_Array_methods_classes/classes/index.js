//создание класса
class Wizard {
    constructor(nameWizard, houseWizard) {
      this.name = nameWizard;
      this.house = houseWizard;
    }
  
    introduce() {
      console.log(`Im ${this.name} from ${this.house}`);
    }
  }
  
  //создание экземпляра класса(объекта)
  const harry = new Wizard("Harry Potter", "Gryffindor");
  console.log(harry);
  harry.introduce();
  
  //Наследование классов
  class DarkWizard extends Wizard {
    constructor(nameWizard, houseWizard, darkPower) {
      super(nameWizard, houseWizard);
      this.darkPower = darkPower;
    }
  
    useDarkPower() {
      console.log(
        `Im ${this.name} from ${this.house} and use dark power ${this.darkPower}`
      );
    }
  }
  
  const voldemort = new DarkWizard(
    "Lord Voldemort",
    "Slytherin",
    "Avada Kedavra"
  );
  
  console.log(voldemort);
  voldemort.introduce();
  voldemort.useDarkPower();