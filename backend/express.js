const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const { PrismaClient } = require('@prisma/client')
const randomImageUrl = `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/400/300`;
const prisma = new PrismaClient();
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/boards', async (req, res) => {
  const Boards = await prisma.boards.findMany()
  res.json(Boards)
})

app.post('/boards', async (req, res) => {
  const { Name, category, author } = req.body
  const newBoard = await prisma.boards.create({
    data: {
        Name,
      category,
      author,
       image: randomImageUrl,
    }
  })
  {console.log(newBoard)}
  res.json(newBoard)
})

app.get('/boards/cards/:boardId', async(req, res) => {
  const boardId = parseInt(req.params.boardId);
  try {
    const cards = await prisma.card.findMany({
      where:{
        boardId: boardId
      }
    });
    res.json(cards);
  } catch (error) {
    console.log(error);
  }
})

app.delete('/boards/:id', async (req, res) => {
  const { id } = req.params
  const deletedBoards = await prisma.boards.delete({
    where: { id: parseInt(id) }
  })
  res.json(deletedBoards)
})
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Port running on ${PORT}`);
})