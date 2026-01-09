import express, { Request, Response } from 'express';
import { z } from 'zod';

const app = express();
app.use(express.json());

// Mock Database
let items_db = [
    { id: 1, name: 'Laptop', price: 1200.0, in_stock: true },
    { id: 2, name: 'Mouse', price: 25.0, in_stock: true },
];

// Zod schema for validation
const ItemSchema = z.object({
    name: z.string(),
    price: z.number(),
    in_stock: z.boolean().optional().default(true),
});
type Item = z.infer<typeof ItemSchema>;

// GET /items?limit=10
app.get('/items', (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
    return res.json(items_db.slice(0, limit));
});

// GET /items/:item_id
app.get('/items/:item_id', (req: Request, res: Response) => {
    const item_id = parseInt(req.params.item_id, 10);
    const item = items_db.find(i => i.id === item_id);
    if (!item) {
        return res.status(404).json({ detail: 'Item not found' });
    }
    return res.json(item);
});

// POST /items
app.post('/items', (req: Request, res: Response) => {
    const parseResult = ItemSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors });
    }
    const newItem: Item & { id: number } = {
        ...parseResult.data,
        in_stock: parseResult.data.in_stock ?? true,
        id: items_db.length + 1,
    };
    items_db.push(newItem);
    return res.status(201).json(newItem);
});

// DELETE /items/:item_id
app.delete('/items/:item_id', (req: Request, res: Response) => {
    const item_id = parseInt(req.params.item_id, 10);
    const initialLength = items_db.length;
    items_db = items_db.filter(i => i.id !== item_id);
    if (items_db.length === initialLength) {
        return res.status(404).json({ detail: 'Item not found' });
    }
    return res.json({ message: 'Item deleted successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});

const app = express();
const PORT = 8001;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Express server is running!');
});

app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
});