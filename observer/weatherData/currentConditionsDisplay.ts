import { Displayment } from "./interface/displayment";
import { Observer } from "./interface/observer";
import { WeatherData } from "./weatherData";

export class CurrentConditionsDisplay implements Observer, Displayment {
  private temperature!: number;
  private humidity!: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  // update(temp: number, humidity: number, pressure: number): void {
  //   this.temperature = temp;
  //   this.humidity = humidity;
  //   this.display();
  // }

  // 아래처럼 코드를 바꾸는 방식을 pull 방식이라고 한다.
  // 위의 주석 코드처럼 update시 마다 temp, humidity, pressure를 받는식으로 코드를 짜면, 나중에 update 데이터가 하나 추가됐을 때 해당 데이터가 필요 없음에도 불구하고 추가를 해줘야 한다.
  // update를 쓰는 모든 곳에 필요는 없지만 써야 하는 코드가 생긴것이다.
  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }

  display(): void {
    console.log(`현재 상태: 온도 ${this.temperature}, 습도 ${this.humidity}`);
  }
}
