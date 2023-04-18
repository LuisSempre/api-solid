import {app} from "./app"

app.listen({
	host: '0.0.0.0',
	port: 7777,
}).then(() => {
	console.log('Running')
})
