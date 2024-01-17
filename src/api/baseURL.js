/* eslint-disable */
export const base = () => {
  let jisuapi = ''
  switch (process.env.VITE_NODE_ENV) {
    case 'development':
      jisuapi = '/proxy-jisuapi'
      break
    case 'test':
      jisuapi = ''
      break
    case 'production':
      jisuapi = ''
      break
  }
  return {
    jisuapi
  }
}
