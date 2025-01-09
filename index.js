const jsonServer=require('json-server')

//const mpserver for media player appliction
const Mpserver=jsonServer.create()
//create middleware
const middleware = jsonServer.defaults()
//set up Route for json file
const route=jsonServer.router('MpDb.json')
const PORT=3000 || process.env.PORT

Mpserver.use(middleware)
Mpserver.use(route)
Mpserver.listen(PORT,()=>(console.log(`mpserver started at port ${PORT}`)
))