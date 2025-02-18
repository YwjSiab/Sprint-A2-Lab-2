// Calculate the circumference of a circle with a radius of 5
const radius = 5;
const circumference = 2 * Math.PI * radius;
console.log('Circumference of circle:', circumference);

// Absolute value of -10
console.log('Absolute value of -10:', Math.abs(-10));

// Floor of 3.9
console.log('Floor of 3.9:', Math.floor(3.9));

// Ceiling of 4.2
console.log('Ceiling of 4.2:', Math.ceil(4.2));

// Random number between 0 and 1
console.log('Random number:', Math.random());

// Create and log the current date
const currentDate = new Date();
console.log('Current date:', currentDate);

// Display today's date in a friendly format
const friendlyDate = currentDate.toDateString();
console.log('Friendly date format:', friendlyDate);

// Convert "hello world" to uppercase
console.log('Uppercase:', 'hello world'.toUpperCase());

// Slice "hello world" from index 0 to 5
console.log('Sliced string:', 'hello world'.slice(0, 5));

// Check if "world" is included in "hello world"
console.log('Includes "world":', 'hello world'.includes('world'));

// Convert 123.456 to two decimal places
const number = 123.456;
console.log('Two decimal places:', number.toFixed(2));

// Convert the string "123.456" to an integer
const stringNumber = '123.456';
console.log('Converted to integer:', parseInt(stringNumber));
