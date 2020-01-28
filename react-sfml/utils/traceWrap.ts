// @ts-nocheck
// TODO: Add type support

export function traceWrap(hostConfig) {
  let traceWrappedHostConfig = {};
  Object.keys(hostConfig).map(key => {
    const func = hostConfig[key];
    traceWrappedHostConfig[key] = (...args) => {
      console.log(key)
      return func(...args);
    };
  });
  return traceWrappedHostConfig;
}
