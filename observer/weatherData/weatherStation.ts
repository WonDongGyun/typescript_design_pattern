import { CurrentConditionsDisplay } from "./currentConditionsDisplay";
import { WeatherData } from "./weatherData";

{
  const weatherData = new WeatherData();
  const currentDisplay = new CurrentConditionsDisplay(weatherData);

  weatherData.setMeasurements(89, 60, 75);
}
