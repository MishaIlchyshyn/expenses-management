function parser(command) {
  let [action, date, price, currency, goods] = command.split(" ");
  let parseCommand = {
    action,
    date,
    price,
    currency,
    goods,
  };

  return parseCommand;
}

export default parser;
