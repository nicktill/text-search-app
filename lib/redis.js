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
