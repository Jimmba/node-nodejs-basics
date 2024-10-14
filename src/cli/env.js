const prefix = "RSS_";
const splitter = "; ";

const parseEnv = () => {
  const envs = Object.entries(process.env)
    .filter((data) => {
      return data[0].indexOf(prefix) === 0;
    })
    .map((data) => {
      const [key, value] = data;
      return `${key}=${value}`;
    })
    .join(splitter);

  console.log(envs);
};

parseEnv();
