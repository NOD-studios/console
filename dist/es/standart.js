import console from 'console';

export let standart = {
  output : () => {},
  error  : () => {}
};

if (console) {
  Object.assign(standart, {
    output : console.log.bind(console),
    error : console.error.bind(console)
  });
}

if (process) {
  Object.assign(standart, {
    output : process.stdout.write.bind(process.stdout),
    error : process.stderr.write.bind(process.stdout)
  });
}

export default standart;
