
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



const generateMarkdown = require('./src/generateMarkdown')
const inquirer = require('inquirer');


const promptProject = (projectData) => {
    if(!projectData){
        projectData = [];
    }
    
    return inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?(Required)',
            validate: projectnameInput => {
                if(projectnameInput){
                    return true;
                } else {
                    console.log('Please enter the name of your project!')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to enter a description of your project?',
            default: true
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short overview of your project',
            when: ({confirmDescription}) => {
                if (confirmDescription){
                    return true;
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableContents',
            message: 'Would you like your README to include a Table of Contents?',
            validate: confirmTableContentsInput => {
            if(confirmTableContentsInput){
                return true}
            },
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmInstructions',
            message: 'Would you like to include instructions?',
            default: false
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Write any instructions you would like included',
            when: ({confirmInstructions}) => {
                if(confirmInstructions){
                    return true
                } else {
                    return false}
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like your README to include a "Usage" section?',
            default: false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write any usage information you would like included',
            when: ({confirmUsage}) => {
                if(confirmUsage){
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like your readme to include a "Credits" section?',
            default: true
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Write the name of any project contributors',
            when: ({confirmCredits}) => {
                if(confirmCredits){
                    return true
                } else {
                    return false}
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?(Required)',
            validate: usernameInput => {
            if (usernameInput){
                return true;
            } else {
                console.log('Please enter your github username!')
                return false;
            }
        }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like your README to include a license?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license would you like included?(Choose One)',
            choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
            when: ({confirmLicense}) => {
                if(confirmLicense){
                    return true
                } else {
                    return false
                }
            }
        }
        
    ]) 
   }

// const mockData = {
  
//         projectName: 'whatevs',
//         description : 'blah blah blah',
//         installation: 'yadda yadda yadda',
//         contributions: 'me and... me',
//         username: 'ldholl',
//         email: 'lacy@gmail.com'    
// }



   
promptProject()
.then(projectData => generateMarkdown(projectData))








