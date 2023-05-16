{
  // 다음의 예제는 각 오리마다 날수도 있고, 꽥꽥거릴 수도 있는데 상속받는 클래스에서 각자 구현하다보니 문제가 발생한다.
  // 자식에서 구현하다 보면 나중에 수정해야할 코드를 일일이 뒤지면서 찾아야 하고, 유지보수하기도 어렵다.

  // 모든 오리가 꽥꽥거리거나 날 수 있는 것은 아니다. 장난감 오리나 나무 오리가 그런 행동을 할 수 있는건 아니니까...
  // swim과 display는 다른 오리 종류에도 반드시 필요한 기능. 따라서 기존의 Duck 클래스에 존재하는것이 옳다.
  // 중요한건 바뀌는 부분을 따로 분리하여 다른 클래스에서 구현하도록 하는 것이다.

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
}
