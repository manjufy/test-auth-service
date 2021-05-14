import express, { Application, Request, Response } from 'express'
const app: Application = express()
const port: number = 3000

app.get('/health', (req: Request, res: Response) => {
    res.send(`I'm Healthy!`)
})

app.listen(port, function () {
    console.log(`Server is listening on port ${port} !`)
})