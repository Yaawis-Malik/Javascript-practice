function greet(firstName, lastName) {
  console.log(`hello ${firstName} ${lastName}`);
}

const timer = setTimeout(greet, 5000, 'yaawis', 'malik');
clearTimeout(timer);
