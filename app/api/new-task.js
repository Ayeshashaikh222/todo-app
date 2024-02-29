import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;


        const client = await MongoClient.connect('mongodb+srv://ayesha:Sk7HxNRkBbgMTcEa@cluster0.rqnksz1.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const todosCollection = db.collection('todos');

        const result = await todosCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'todos inserted' });

    }
}

export default handler;