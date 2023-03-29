interface storageType {
  key: string;
  token: string;
}

export const setItem = (key: string, token: string) => {
  try {
    localStorage.setItem(key, token);
  } catch (err) {
    console.log(err);
  }
};

export const getItem = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    console.log(err);
  }
};

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
}
