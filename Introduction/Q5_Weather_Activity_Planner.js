// Q5: Weather Activity Planner
// Advises user based on temperature, isRaining, and windSpeed.

const temperatureC = 28;     // in °C
const isRaining = false;
const windSpeedKmph = 12;    // km/h

if (isRaining) {
  console.log("Stay indoors with hot coffee.");
} else if (temperatureC > 35) {
  console.log("Go swimming.");
} else if (temperatureC < 15 && windSpeedKmph > 20) {
  console.log("Too cold and windy — stay home.");
} else {
  console.log("Perfect day for a walk.");
}
