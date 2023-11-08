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
const ifNumber = calculateValue(11);

// console.log(ifString);
// console.log(ifNumber);

// -----------------------------End---------------------------//

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

// -----------------------------End---------------------------//

// Problem --> 03

class Cat {}
const isCat = (animal: any): animal is Cat => {
  return animal instanceof Cat;
};

const cat1 = new Cat();
const cat2 = { name: "Cat" };

const res = isCat(cat1);
if (res) {
  //   console.log("yes, it's a cat.");
} else {
  //   console.log("no, it's not a cat.");
}
// -----------------------------End---------------------------//

// Problem --> 04
