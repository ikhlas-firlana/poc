const axios = require('axios');

exports.auth = (callback, errorCallback) => {
    // Request API.
    axios
    .post('http://localhost:1337/auth/local', {
        identifier: 'user_test_1@firlana.com',
        password: 'helloworld'
    })
    .then(response => {
        // Handle success.
        // console.log('Well done!');
        // console.log('User profile', response.data.user);
        // console.log('User token', response.data.jwt);
        callback(response, response.data.jwt);
    })
    .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
        errorCallback(error);
    });
}