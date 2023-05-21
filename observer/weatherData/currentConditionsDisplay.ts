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

  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(`현재 상태: 온도 ${this.temperature}, 습도 ${this.humidity}`);
  }
}
