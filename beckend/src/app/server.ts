import mongoose from 'mongoose';
import app from "./app";
let port = process.env.PORT || 5000;
main().catch(err => console.log(err));


async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tbsccmb.mongodb.net/car_rental?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("mongodb connect ✅")
    app.listen(port, () => {
        console.log(`server running on`, port)
    })
}