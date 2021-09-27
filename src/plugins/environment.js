const PROJECT_ENV_LIST = {
  'test.com': 'production',
  'test.kp.com': 'production',
  'test.kq.com': 'staging',
  'test.kt.com': 'development'
}

const GATEWAY_HOST_LIST = {
  development: 'https://tmzj.com',
  test: 'https://tmzj.com',
  staging: 'https://qmzj.com',
  production: 'https://zmzj.com'
}

export const env = PROJECT_ENV_LIST[window.location.host] || 'development'
export const GATEWAY_HOST = GATEWAY_HOST_LIST[env]
