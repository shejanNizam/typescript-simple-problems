// Problem --> 01
const calculateValue = (value: number | string): number | string => {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * value;
  } else {
    return " Input the value string or number ";
  }
};
const ifString = calculateValue("Nizam Uddin");
const ifNumber = calculateValue(7);

// console.log(ifString);
// console.log(ifNumber);

// Problem --> 02
type Address = {
  city: string;
  street: string;
};
interface Person {
  address?: Address;
  phoneNum?: string;
}

const getAddressCity = (person: Person) => {
  return person?.address?.city;
};

const person1: Person = {
  address: {
    city: "Bogura",
    street: "Road-07",
  },
  phoneNum: "016 000 000",
};
const result = getAddressCity(person1);

// console.log(result);

// Problem --> 03
class Cat {}
const isCat = (animal: any): animal is Cat => {
  return animal instanceof Cat;
};

const cat1 = new Cat();
const cat2 = { name: "Cat" };

if (isCat(cat1)) {
  // console.log("yes, it's a cat.");
} else {
  // console.log("no, it's not a cat.");
}

// Problem --> 04
const sumAllNumInMixesData = (mixedData: (string | number)[]): number => {
  let sum = 0;

  for (const num of mixedData) {
    if (typeof num === "number") {
      sum += num;
    }
  }
  return sum;
};

const mixedData: (number | string)[] = [1, "two", 3, "four", 5, 6];
const result1 = sumAllNumInMixesData(mixedData);
// console.log(result1);

// Problem --> 05
interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: string;
}

interface CarAndDriver {
  make: string;
  model: string;
  year: number;
  name: string;
  licenseNumber: string;
}

const combinedPropertiesWithCarAndDriver = (
  car: Car,
  driver: Driver
): CarAndDriver => {
  return {
    ...car,
    ...driver,
  };
};

const carInfo: Car = {
  make: "Toyota",
  model: "RXM02",
  year: 2003,
};
const driverInfo: Driver = {
  name: "Mr. X",
  licenseNumber: "XYZ1234",
};

const result2 = combinedPropertiesWithCarAndDriver(carInfo, driverInfo);
// console.log(result2);

// Problem --> 06
const arrayOfNumbers = (array: unknown): array is number[] => {
  return (
    Array.isArray(array) && array.every((value) => typeof value === "number")
  );
};

const calculateTheSum = (array: unknown) => {
  if (arrayOfNumbers(array)) {
    const sum = array.reduce((x, num) => x + num, 0);
    // console.log(`Sum of numbers: ${sum}`);
  } else {
    // console.log("Not an array of numbers");
  }
};
const result3: unknown = [1, 2, 3, 4, 5, 6];
const result4: unknown = ["1", 2, 3, 4, 5, "6"];

calculateTheSum(result3);

// Problem --> 07
const findFirstOccurrence = <T>(array: T[], value: T): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

const numbers: number[] = [1, 2, 3, 4, 5, 2];
const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;
const targetString = "cherry";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
const indexInStrings = findFirstOccurrence(strings, targetString);

// console.log(indexInNumbers);
// console.log(indexInStrings);

// Problem --> 08
interface Product {
  name: string;
  price: number;
  quantity: number;
}

const calculatesTotalCost = (shoppingCart: Product[]): number => {
  let totalCost = 0;
  for (const product of shoppingCart) {
    totalCost += product.quantity * product.price;
  }
  return totalCost;
};

const shopping: Product[] = [
  { name: "X", price: 10, quantity: 2 },
  { name: "Y", price: 10, quantity: 3 },
  { name: "Z", price: 10, quantity: 1 },
];

const result5 = calculatesTotalCost(shopping);
// console.log(result5);
