const setLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export { setLocalStorage, getLocalStorage };
