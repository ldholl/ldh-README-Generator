const fs = require('fs');


const generateMarkdown = (projectData) => {
 console.log(projectData)   
    
let docText =  `
#${projectData.projectName}

${generateLicenseBadge(projectData.license)}
    
${generateDescription(projectData.description)}


${generateTableContents(projectData)}


${generateInstructions(projectData.instructions)}
    
${generateUsage(projectData.usage)}   


${generateCredits(projectData.contributions)}

${generateLicense(projectData.license)}

##Contact
-Github: [${projectData.username}](https://github.com/${projectData.username})
${generateContact(projectData.email)}
`


    fs.writeFile('README.md', docText, err => {
        if(err) throw err;
        console.log('README complete!')
    })
}

// create license badge
const generateLicenseBadge = badgeChoice =>{
    if (!badgeChoice){
        return ""
    }
    if(badgeChoice[0] === 'MIT' ){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if(badgeChoice[0] === 'Apache'){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    if (badgeChoice[0] === 'GPLv2'){
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    }
    if(badgeChoice[0] === 'GPLv3'){
        return  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
}
// //create description section

const generateDescription = descriptionText => {
    if(!descriptionText){
        return '';
    }
    return `
##Description
${descriptionText}
    `
}

// TABLE OF CONTENTS SECTION
const generateTableContents = projectData => {
let tableContentText = ""
    if(projectData.confirmTableContents === true){
tableContentText += `##Table of Contents
`}
else {return ''}
    
    if(projectData.confirmInstructions === true){
tableContentText += `-[Instructions](#Instructions)
`
    }
    if (projectData.confirmUsage === true){
tableContentText += `-[Usage](#Usage)
`
    }
    if (projectData.confirmCredits === true){
tableContentText +=`-[Contributions](#Contributions)
`        
    }
    if (projectData.confirmLicense === true){
tableContentText += `-[License](#License)`

return tableContentText;

    } 
;
}

//INSTALLATION, USAGE, CREDITS

const generateInstructions = instructionText => {
    if(!instructionText){
        return ""
    }
    return `
##Instructions
${instructionText}
    `
}

const generateUsage = usageText => {
    if(!usageText){
        return ""
    }
    return `
##Usage
${usageText}
`
}

const generateCredits = creditsText => {
    if(!creditsText){
        return ""
    }
    return `
##Contributions
${creditsText}
`
}

const generateContact = contactText => {
    if (!contactText){
        return ""
    }
    return `
-email: ${contactText}`
}

//LICENSE
const generateLicense = licenseText => {

if(!licenseText){
    return ""
}
if (licenseText[0] === 'MIT'){
    return  `
#License 
    
This  project is covered by the MIT License, &copy 2022
`
}
if (licenseText[0] ==='GPLv2'){
    return `
##License

This project is covered by the GPLv2 License, &copy 2022
`
}
if (licenseText[0]=== 'Apache'){
return`
#License

This project is covered by the Apache License, &copy 2022`

}
if (licenseText[0] === 'GPLv3'){
    return `
#License
This project is covered by the GPLv3 License, &copy 2022`
}




}

module.exports = generateMarkdown