export const getLocalStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch {
    return localStorage.getItem(key)
  }
}

export const setLocalStorage = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const removeLocalStorage = key => {
  localStorage.removeItem(key)
}