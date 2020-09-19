import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL:process.env.MONGODB_URL ||'mongodb+srv://pradipamate:pradipamate@cluster0-gyiqr.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET:process.env.JWT_SECRET ||"somethingsecret"
}