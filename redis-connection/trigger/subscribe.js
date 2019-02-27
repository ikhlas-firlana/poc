const redis = require("redis"),
    client = redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
    });

    client.on('connect', function() {
        console.log(':connect:')
        client.on("message", function (channel, message) {
            console.log("sub channel " + channel + ": " + message);
        });
        
        client.subscribe("remote-working");
    })
