const redis = require("redis"),
    client = redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
    });

    client.on('connect', function() {
        console.log(":connect:");
        client.set("key", "testing-key", function(err, reply) {
            if (err) {
                console.error(err);
            }
            console.log(reply);
        })
    })