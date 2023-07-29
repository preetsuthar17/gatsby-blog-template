---
title: "C basics #4 - Operators"
date: 2023-01-24
tags: ["c"]
---

C is a powerful programming language that provides a wide range of operators for performing various operations. In this post, we will take a closer look at the different types of operators available in C and how they are used.

## Arithmetic Operators
Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, division, and modulus. The following table lists the arithmetic operators in C and their corresponding symbols:

|Operator|Symbol|
|--------|-------|
|Addition	|+|
|Subtraction	|-|
|Multiplication	|*|
|Division	|/|
|Modulus	|%|

For example, the following code uses the addition operator to add two numbers and store the result in a variable:

```c
int x = 3;
int y = 4;
int result = x + y;
```

## Comparison Operators
Comparison operators are used to compare values and determine if they are equal, not equal, greater than, less than, greater than or equal to, or less than or equal to. The following table lists the comparison operators in C and their corresponding symbols:

| Operator	| Symbol |
|-----------|--------|
|Equal|	==|
|Not equal|	!=|
|Greater than|	>|
|Less than|	<|
|Greater than or equal to|	>=|
|Less than or equal to|	<=|

For example, the following code uses the greater than operator to check if one number is greater than another:

```c
int x = 3;
int y = 4;
if (x > y) {
    printf("x is greater than y");
}
```

## Logical Operators
Logical operators are used to perform logical operations such as AND, OR, and NOT. The following table lists the logical operators in C and their corresponding symbols:


|  Operator | Symbol |
|---------| ------ |
| AND | && |
| OR	| || |
| NOT |	! |


For example, the following code uses the AND operator to check if two conditions are true:

```c
int x = 3;
if (x > 0 && x < 5) {
    printf("x is between 0 and 5");
}
```

## Bitwise Operators
Bitwise operators are used to perform bit-level operations such as AND, OR, XOR, NOT, left shift, and right shift. The following table lists the bitwise operators in C and their corresponding symbols:

|Operator	|Symbol|
|---------|-------|
|AND	|&|
|OR	| || |
|XOR	|^|
|NOT	|~|
|Left shift	|<<|
|right shift |>>|

For example, the following code uses the left shift operator to shift the bits of a number to the left:

```c
int x = 3;
x = x << 1;
```

## Assignment Operators
Assignment operators are used to assign values to variables. The following table lists the assignment operators in C and their corresponding symbols:

|Operator|	Symbol|
|--------|----------|
|Assignment	|=|
|Addition assignment	|+=|
|Subtraction assignment	|-=|
|Multiplication assignment	|*=|
|Division assignment	|/=|
|Modulus	assignment | %= |

For example, the following code uses the addition assignment operator to add a value to a variable and store the result in the same variable:

```c
int x = 3;
x += 2; // x is now 5
```

## Conditional Operator
The conditional operator `(?:)` is also known as the ternary operator. It is used to decide which value to assign based on a condition. The syntax of the conditional operator is as follows:
`
condition ? value1 : value2
`
If the condition is true, value1 will be assigned, otherwise value2 will be assigned.

For example, the following code uses the conditional operator to assign a value to a variable based on the value of another variable:

```c
int x = 5;
int result = x > 0 ? x : -x;
```

## sizeof Operator
The sizeof operator is used to determine the size in bytes of a variable or data type. For example, the following code uses the sizeof operator to find the size of an integer:

```c
int x = 5;
printf("Size of x: %d bytes", sizeof(x));
```

## & operator (Address-of operator)
The & operator is used to determine the address of a variable in memory. For example, the following code uses the & operator to find the address of an integer variable:

```c
int x = 5;
printf("Address of x: %p", &x);
```

In conclusion, C provides a wide range of operators for performing various operations. Understanding how to use these operators is an essential part of becoming proficient in C programming.
