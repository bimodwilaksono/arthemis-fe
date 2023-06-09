export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  try {
      return JSON.parse(data);
  } catch (e) {
      return data;
  }
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
}