const graphql = require('./fauna-graphql/fauna-graphql');

exports.handler = async () => {

  const { artworks } = await graphql(`
    query Artworks {
      artworks {
        data {
          _id
          title
          description
        }
      }
    }
  `);

  return {
    statusCode: 200,
    body: JSON.stringify(artworks.data),
  };
};