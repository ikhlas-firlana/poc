const axios = require('axios');

// Request API. 
// Add your own code here to customize or restrict how the public can register new users.
axios
  .post('http://localhost:1337/auth/local/register', {
    username: 'Strapi user test',
    email: 'user_test_1@firlana.com',
    password: 'helloworld'
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
