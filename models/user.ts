import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

const User = model<IUser>('users', userSchema);

export default User;