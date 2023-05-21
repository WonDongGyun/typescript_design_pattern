import { Observer } from "./interface/observer";
import { Subject } from "./interface/subject";

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  registerObserver(o: Observer): void {
    const isExist = this.observers.includes(o);

    if (isExist) {
      return console.log("Subject: Observer has been attached already.");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(index, 1);
    console.log("Subject:  remove  observer.");
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  // WeatherData에서 온도 습도 기압을 새로 받을때마다 호출
  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temp: number, humidity: number, pressure: number) {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature(): number {
    return this.temperature;
  }
  getHumidity(): number {
    console.log("get Humidity!");
    return this.humidity;
  }
  getPressure(): number {
    console.log("get Pressure!");
    return this.pressure;
  }
}
