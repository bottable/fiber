// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

module.exports = [
  {
    type: 'input',
    name: 'component',
    message: "What's your new member called?"
  },
  {
    type: 'input',
    name: 'category',
    message: "What's your category does it belong ex. component, layout ...etc?"
  },
  {
    type: 'input',
    name: 'element',
    message: "What's your base HTML element?"
  }
]
