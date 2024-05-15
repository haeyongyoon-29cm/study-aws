import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).send('hello from express');
})

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`)
})
