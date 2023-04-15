// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"
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

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  
  - [Description] (#description)
  - [License](#license)
  - [Requirements] (#require)
  - [Usage](#usage)
  - [Contact-Me] (#contact-me)
  - [Contributors] (#contributors)
  
  
  ## Description
  
  ${data.description}

  ## License 

  ${data.license}

  ## Requirements
  
  ${data.require}
  
  ## Usage
  
  ${data.usage}
  
  ## Contact Me
  - Name - ${data.name}
  - Email - ${data.email}
  - Github - [${data.creator}](https://github.com/${data.creator}/)

  ## Contributors 
  
 ${data.contributors}
  
`}

module.exports = generateMarkdown;
