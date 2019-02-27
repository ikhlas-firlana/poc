const redis = require("redis"),
    client = redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD
    });

async function main() {
    try {
        client.on('connect', function() {
            console.log(":connect:");
            client.get("key", function (error, result) {
                if (error) {
                    console.log(error);
                    throw error;
                }
                console.log('GET result ->' + result);
            });
            // console.log(":key:", key);
        });            
    } catch (error) {
        console.error(error);
    }
}
main()