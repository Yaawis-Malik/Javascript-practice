function sayMyName(name) {
  console.log(`hello ${name}`);
}

function iDontKnow(sayIt) {
  const name = 'HEISENBERG';
  sayIt(name);
}

iDontKnow(sayMyName);
