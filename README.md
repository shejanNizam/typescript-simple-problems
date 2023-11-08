# l2b2a1-explore-basic-typescript-simple-assignment-shejanNizam

## Question - 01: What are some benefits of using TypeScript over JavaScript in a project?

### Ans: TypeScript offers a range of benefits over JavaScript, including improved type safety, tooling, and integration. By using TypeScript, developers code can be high-quality, scalable, and maintainable that is easier to debug and test.

## Question - 02: What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

### Ans: Optional Chaining allows for concise handling of potentially null or undefined values, while nullish coalescing allows for a default value to be assigned in the case of null or undefined .

## Question - 03: How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?

### Ans: Async/Await is a syntax built on top of Promises that provides a more concise and synchronous-looking way of dealing with asynchronous operations. It allows developers to write asynchronous code that resembles synchronous code, making it easier to read and maintain.

## Question - 04: How can you use TypeScript's enums, and what are their advantages?

### Ans: TypeScript enums are a way to define a set of named constants. They allow you to create a collection of related values that can be assigned to variables or used as a type. Enums provide a convenient way to work with a fixed set of values in a type-safe manner.

## Question - 05: Explain the role of type guards in TypeScript and provide an example of a custom type guard.

### Ans: Type guards are a valuable feature in TypeScript that allows developers to write more type-safe code by narrowing down the type of a variable or expression within a conditional block at runtime. By using type guards, TypeScript can detect and prevent runtime errors that may occur due to incorrect types.

## Question - 06: Can you give an example of how to use "readonly" properties in TypeScript?

### Ans:

type MyReadonly<T> = {
readonly [K in keyof T]: T[K];
};
interface TodoRead {
title: string;
description: string;
}

const todoRead: MyReadonly<TodoRead> = {
title: 'Hey',
description: 'foobar',
};

## Question - 07: Explain what a union type is in TypeScript and provide an example of its usage

### Ans: A union type describes a value that can be one of several types. We use the vertical bar ( | ) to separate each type, so number | string | boolean is the type of a value that can be a number , a string , or a boolean .
