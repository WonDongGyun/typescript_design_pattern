{
  // 자주 변경되는 행동이었던 fly와 quack을 각각 인터페이스로 분리한다.
  // Duck 클래스에 해당 행동들이 있었을 때는 항상 특정 구현에 의존했기 때문에 수정하기 어려웠다.
  // 하지만 인터페이스로 따로 빼서 사용하면 Duck 클래스에 종속되지 않고 수정이 가능하다. 따라서 Duck은 해당 행동을 구체적으로 구현할 필요가 없다.
  // 인터페이스를 사용하지 않고 추상 슈퍼클래스를 사용해도 효과는 똑같다.

  // 여기서 중요한 점은 Duck 클래스에서 quack, fly를 정의하고 자식에서 구현하는 것이 아니라, 행동들을 분리하고 해당 행동들을 위임한다는 점이다.

  interface FlyBehavior {
    fly(): void;
  }

  class FlyWithWings implements FlyBehavior {
    fly(): void {
      console.log("fly fly !!!");
    }
  }

  class FlyNoWay implements FlyBehavior {
    fly(): void {
      console.log("I don't fly !!!");
    }
  }

  interface QuackBehavior {
    quack(): void;
  }

  class Quack implements QuackBehavior {
    quack(): void {
      console.log("quak quak!");
    }
  }

  class QuackSpeack implements QuackBehavior {
    quack(): void {
      console.log("beep beep!");
    }
  }

  class MuteQuack implements QuackBehavior {
    quack(): void {
      console.log("");
    }
  }

  // 모든 Duck에서는 flyBehavior, quackBehavior 인터페이스를 구현한다.
  // 꽥꽥거리거나 나는 행동을 직접 처리하는 대신,  flyBehavior, quackBehavior로 참조되는 객체에 해당 행동을 위임합니다.
  // 따라서 사용자는 객체의 종류는 전혀 신경 쓰지 않고 quack(), fly()를 실행할 줄만 알면 된다.

  // setter를 활용하여 동적으로 객체의 상태를 바꿀 수도 있다.

  abstract class Duck {
    constructor(
      protected flyBehavior: FlyBehavior,
      protected quackBehavior: QuackBehavior
    ) {}

    swim() {
      console.log("can swim~");
    }

    display() {}

    performFly() {
      this.flyBehavior.fly();
    }

    performQuack() {
      this.quackBehavior.quack();
    }

    setFlyBehavior(flyBehavior: FlyBehavior) {
      this.flyBehavior = flyBehavior;
    }

    setQuackBehavior(quackBehavior: QuackBehavior) {
      this.quackBehavior = quackBehavior;
    }
  }

  // 따라서 자식 클래스에서 fly, quack 행동을 할때는 해당 행동을 위임받은 객체를 생성해준다.

  class MallardDuck extends Duck {
    constructor() {
      super(new FlyWithWings(), new Quack());
    }

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
    display(): void {
      console.log("I'm RubberDuck");
    }
  }

  class DecoyDuck extends Duck {
    display(): void {
      console.log("I'm DecoyDuck");
    }
  }

  const mallardDuck = new MallardDuck();
  mallardDuck.performFly();
  mallardDuck.performQuack();
  mallardDuck.setFlyBehavior(new FlyNoWay());
  mallardDuck.performFly();
}

// 이런식으로 클래스를 합치는 것을 구성(composition)이라고 한다.
// Duck 클래스에서 행동을 상속받는대신 올바른 행동 객체로 구성되어 행동을 부여받는다.
// 전략 패턴(strategy pattern)은 알고리즘군을 정의하고 캡슐화하여 각각의 알고리즘군을 수정해서 사용할 수 있게 해주는 디자인 패턴이다.
// 전략 패턴을 사용하면 클라이언트로부터 알고리즘을 분리해서 독립적으로 변경할 수 있다.
