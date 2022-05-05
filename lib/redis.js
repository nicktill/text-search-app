import { Client, Entity, Schema, Repository } from 'redis-om';

// client is entry point for interating with the database
const client = new Client();

// connecting to db in the cloud
// async because we want to only connection if not already open
async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL); //access env variable @.env.local
    }
}

//car entity object, database table 
class Car extends Entity { }
let schema = new Schema(
    Car,
    {
        // hash keys in redis db
        make: { type: 'string' }, //"Tesla"
        model: { type: 'string' }, //"Model3"
        image: { type: 'string' }, //"https://www.tesla.com/model3"
        description: { type: 'string', textSearch: true },
    },
    //add this in order to use redis JSON module
    {
        dataStructure: 'JSON', //reddis now operates more like a document oriented database

    }
);

export async function createCar(data) {
    // await connect();
}
