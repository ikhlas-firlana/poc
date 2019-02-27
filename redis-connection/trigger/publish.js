const redis = require("redis"),
    client = redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
    }),
    pubclient = redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
    });

    client.on('connect', function() {
        console.log(":connect:");
        client.on("subscribe", function (channel, count) {
            console.log(":subscribe:");
            pubclient.publish('remote-working', "I am sending a message.");
            pubclient.publish('remote-working', "I am sending a second message.");
            pubclient.publish('remote-working', "I am sending my last message.");
        });
    })