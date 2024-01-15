/* eslint-disable */
export const base = () => {
  let jisuapi = ''
  switch (process.env.VITE_NODE_ENV) {
    case 'development':
      jisuapi = '/proxy-jisuapi'
      break
    case 'test':
      jisuapi = '/proxy-jisuapi'
      break
    case 'production':
      jisuapi = '/proxy-jisuapi'
      break
  }
  return {
    jisuapi
  }
}
