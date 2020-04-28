const sayHello = () => {
  console.log('Hi Hubert');
}
const sayHello1 = (name) => console.log('Hi ' + name);
const sayHello2 = (name, greeting = 'Hi there,') => console.log(greeting + ' ' + name);

sayHello();
sayHello1('Hubert');
sayHello2('Hubert', 'Hello');
sayHello2('Hubert');

const checkInput = (callback, ...values) => {
  if (values.length === 0) {
    callback('Got no values');
  }
  for (const value of values) {
    if (value.length === 0) {
      callback('Got empty value in values');
    }
  }
};

const logMessage = (message) => console.log(message);
checkInput(logMessage);
checkInput(logMessage, '');
checkInput(logMessage, 'a', 'b');