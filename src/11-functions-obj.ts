;(() => {
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password)
  }
  // login('ger@dasd', '213')
  login({
    email: 'germ',
    password: '23'
  })
})()
