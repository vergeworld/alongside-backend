export function setStorage(key, value) {
  if (value === '') return new Error('存储内容不能为空')
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export function getStorage(key) {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export function delStorage(key) {
  window.localStorage.removeItem(key)
}

export function cleStorage() {
  window.localStorage.clear()
}
