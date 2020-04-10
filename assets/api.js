const axios = require("axios")
const api = {
  getUser(github) {
    queryURL = `https://api.github.com/users/${github}`
    axios.get(queryURL)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
};

module.exports = api;