const domain = require('domain')

module.exports = function test(moduleOptions) {
  // this.nuxt.hook('render:setupMiddleware', app => app.use(requestHandler))
  // this.nuxt.hook('render:errorMiddleware', app => app.use(errorHandler))
  // this.nuxt.hook('generate:routeFailed', ({ route, errors }) => {
  //   errors.forEach(({ error }) => console.log('routefailed error: ', error, 'routefailed route: ', route))
  // })
  this.nuxt.hook('render:errorMiddleware', app => app.use((err, req, res, next) => {
    console.log('nuxt error: ', err)
    next(err)
  }))
}