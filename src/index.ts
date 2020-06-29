exports.apply = (action: string, ...args: any) => {
  require(`./${action}`)(...args);
}
