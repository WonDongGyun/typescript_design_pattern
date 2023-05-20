{
  class WeatherData {
    getTemperature(): number {
      console.log("get Temperature!");
      return 1;
    }
    getHumidity(): number {
      console.log("get Humidity!");
      return 1;
    }
    getPressure(): number {
      console.log("get Pressure!");
      return 1;
    }

    // WeatherData에서 온도 습도 기압을 새로 받을때마다 호출
    measurementsChanged() {
      const temp: number = this.getTemperature();
      const humidity: number = this.getHumidity();
      const pressure: number = this.getPressure();

      // 온도 습도 기압을 새로 받으면 각 디스플레이를 갱신한다.
      // 현재 조건 디스플레이, 기상 통계 디스플레이, 기상 예보 디스플레이
      // 하지만 구체적인 구현에 맞춰서 코딩했기에, 프로그램을 고치지 않고서는 새로운 디스플레이를 추가 / 제거 할 수 없다.
      // 세가지 디스플레이 모두 temp, humidity, pressure 라는 공통 데이터를 받는 update 메소드를 사용하고 있다. 따라서 인터페이스를 사용하고 있음을 알 수 있다.
      // 세가지 디스플레이 모두 바뀔 수 있는 부분으로 캡슐화 해야 한다.
      currentConditionsDisplay.update(temp, humidity, pressure);
      statisticsDisplay.update(temp, humidity, pressure);
      forecastDisplay.update(temp, humidity, pressure);
    }
  }
}
