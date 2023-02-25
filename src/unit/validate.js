// 用户账号验证
export function validateAccount(rule, value, callback) {
  // 用户账号为随行账户、手机号、邮箱
  const regexp = /^[a-zA-Z0-9]{6,11}$/
  if (value === '') {
    callback(new Error('账号\\手机号\\邮箱'))
  } else if (!regexp.test(value)) {
    callback(new Error('用户名格式错误'))
  } else {
    callback()
  }
}

// 用户密码验证
export const validatePassword = function (rule, value, callback) {
  // 强密码(必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8 - 10之间)
  const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (!password.test(value)) {
    callback(new Error('密码格式错误'))
  } else {
    callback()
  }
}

// 验证码校验
export const validateCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (value.toLowerCase() !== 'XMBA'.toLowerCase()) {
    callback(new Error('验证错误'))
  } else {
    callback()
  }
}
