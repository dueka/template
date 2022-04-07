function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

function getItem(key: string) {
  const val = localStorage.getItem(key);
  if (val !== null && val.length > 0) {
    return val;
  }
  return null;
}

function removeItem(key: string) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}

// eslint-disable-next-line
export default {
  set: setItem,
  remove: removeItem,
  get: getItem,
  clear: clearLocalStorage
};
