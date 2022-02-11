import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

const PORT = 8000;



function startHttpServer() {
    const app = express();
    return app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
}

function startWSServer(server: http.Server) {

    const ws = new  WebSocketServer({
        server
    })

    ws.on('connection',function (ws) {
        ws.on('message',function (data) {
            console.log('received: %s', data)
        })
    })
}

startWSServer(startHttpServer())