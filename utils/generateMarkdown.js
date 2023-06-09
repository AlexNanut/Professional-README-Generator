// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contact-Me](#contact-me)
  - [Contributors](#contributors)
  - [Testing](#tests)  
  - [Questions](#questions)
  
  ## Description
  
  ${data.description}

  ## License 

  ${data.license}

  ## Installation
  
  ${data.require}
  
  ## Usage
  
  ${data.usage}
  
  ## Contact Me 
  - Name - ${data.name}
  - Email - ${data.email}
  - Github - [${data.creator}](https://github.com/${data.creator}/)

  ## Contributors 
  
 ${data.contributors}

 ## Testing

 ${data.testing}

 ## Questions

 ${data.questions}
  
 Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).


`}

module.exports = generateMarkdown;
