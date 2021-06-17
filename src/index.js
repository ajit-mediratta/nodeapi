const server = require('./server')

server.listen(4000, () => {
  console.log(`Started on port ${server.address().port}`)
})
