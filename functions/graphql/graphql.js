const axios = require('axios');

module.exports = async function(query, variables = {}) {
  axios
    .post(
      'https://graphql.fauna.com/graphql',
      {
        query
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FAUNA_SERVER_SECRET}`,
        },
      },
    )
    .then(response => response.data.data)
    .catch(error => {
      console.error(error);
    });