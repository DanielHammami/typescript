function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    // Do something
  }
}

//processEvents();
reject("Error");
console.log("Hello World");
