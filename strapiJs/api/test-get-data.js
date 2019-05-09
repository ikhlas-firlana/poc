const axios = require('axios');
const auth = require('./auth.js');
// Request API. 
// Add your own code here to customize or restrict how the public can register new users.
async function get() {
    const token = await new Promise((resolve, rejected) => {
        auth.auth((data, jwt) => {
            console.log(":response:",jwt);

            resolve(jwt);
        }, (err) => {
            console.log("err", err);
            resolve(null);
        })  
    });
    console.log("token", token);
    axios
    .get('http://localhost:1337/restaurants', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User token', response.data);

        if (Array.isArray(response.data)) {
            Array.from(response.data).forEach((value) => {
                console.log(value.category);
            })
        }
    })
    .catch(error => {
        // Handle error.
        console.log("errr", error);
        // console.log('An error occurred:', error);
    });
}

get();