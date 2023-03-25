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
