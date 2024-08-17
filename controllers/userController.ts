import USER from '../models/user';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await USER.findOne({ email, password });
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}

export default { login };