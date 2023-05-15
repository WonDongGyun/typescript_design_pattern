abstract class Duck {
  quack() {
    console.log("quak quak!");
  }

  swim() {
    console.log("can swim~");
  }

  display() {}

  fly() {
    console.log("fly fly !!!");
  }
}

class MallardDuck extends Duck {
  display(): void {
    console.log("I'm MallardDuck");
  }
}

class RedheadDuck extends Duck {
  display(): void {
    console.log("I'm RedheadDuck");
  }
}

class RubberDuck extends Duck {
  quack(): void {
    console.log("beep beep!");
  }

  display(): void {
    console.log("I'm RubberDuck");
  }

  fly() {
    console.log("I don't fly !!!");
  }
}

class DecoyDuck extends Duck {
  quack(): void {
    console.log("");
  }

  display(): void {
    console.log("I'm DecoyDuck");
  }

  fly() {
    console.log("I don't fly !!!");
  }
}
