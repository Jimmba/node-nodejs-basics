const prefix = "--";
const splitter = ", ";

const parseArgs = () => {
  const args = process.argv.slice(2);
  const array = [];
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].slice(2);
    const value = args[i + 1];

    array.push(`${key} is ${value}`);
  }

  console.log(array.join(splitter));
};

parseArgs();
