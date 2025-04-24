import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb+srv://${username}:${password}@cluster0.bq0bvbl.mongodb.net/myDatabase?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://somnath123:${password}@cluster0.1ddvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
};

export default Connection;
