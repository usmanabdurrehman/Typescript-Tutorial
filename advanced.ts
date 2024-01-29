interface Bicycle {
  isCar: false;
  saddleColor: string;
}

interface Car {
  isCar: true;
  plate: string;
}

type Vehicle = Bicycle | Car;

const vehicles: Vehicle[] = [
  {
    isCar: true,
    plate: "1111",
  },
  {
    isCar: false,
    saddleColor: "red",
  },
];

const isCar = (vehicle: Vehicle): vehicle is Car => vehicle.isCar;

const cars = vehicles.filter(isCar);
