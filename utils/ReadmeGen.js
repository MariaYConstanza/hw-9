// creating a generating readme file
function genMarkdown(data) {
    return`
    # ${data.title}
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT${data.github}/${data.repo})
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC${data.github}/${data.repo})
    [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0${data.github}/${data.repo})
    ## Description${data.description}
    
    ## Table of Contents
    - [Installations](#installations)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test](#test)
    - [Questions](#questions)
    - [Licenses](#licenses)
    
    ## Installations${data.installations}
    
    ## Usage${data.usage}
    
    ##Contribution${data.contribution}
    
    ## Test${data.test}
    
    ## Questions
    - Check in my [Github profile](https://github.com${data.github}).
    - Have more questions contact me in [via email](mailto:${data.email}).
    
    ## Licenses${data.licenses}
    Copyright [${data.github}](https://github.com/${data.github}). All rights reseved
    `;
}

module.exports = genMarkdown;