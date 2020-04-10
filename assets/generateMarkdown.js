function generateMarkdown(data, result) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

  * [Installation](#Installation)

  * [Usage](#Usage)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Installation

To install necessary dependencies, run the following command:

${data.installation}

### Usage 

${data.usage}

### License

This project is licensed under the ${data.license} License
[![${data.license} License](http://img.shields.io/badge/licence-${data.license}-blue.svg)]

### Contributing

${data.contributing}

### Tests

To run tests, please execute the following command(s):

${data.tests}

### Questions

${result.avatar_url}

If you have any questions about the repository, open an issue or contact [${result.name}](https://api.github.com/users/${result.login}) directly at ${result.email || "NA"}.
`;
}

module.exports = generateMarkdown;
