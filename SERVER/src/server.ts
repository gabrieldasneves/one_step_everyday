import Fastify from "fastify"

const app = Fastify()

app.get('/', () => {
    return "Hello wolrd"
})

app.listen({
    port:3333,
}).then(() => {
    console.log("HTTP SERVER RUNNING")
})