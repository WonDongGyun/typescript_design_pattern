{
  // 각 주제마다 여러개의 옵저버가 존재할 수 있다.
  // 주제와 옵저버는 1:N 관계이다.
  interface Subject {
    registerObserver();
    removeObserver();
    notifyObservers();
  }

  class ConcreteSubject implements Subject {
    registerObserver() {
      console.log("register");
    }
    removeObserver() {
      console.log("remove");
    }
    notifyObservers() {
      console.log("notify");
    }

    getState() {}
    setState() {}
  }

  interface Observer {
    update();
  }

  class ConcreteObserver implements Observer {
    update() {
      console.log("update");
    }
  }
}
