const path = require("path");

module.exports = {
  prompt: ({ prompter, args }) => {
    const questions = [{
      type: "input",
      name: "name",
      message: "What is the component name?",
    }, {
      type: "input",
      name: "dir",
      message: "Where is the directory?(Optional)",
    }];
    return prompter
      .prompt(questions)
      .then(({ name, dir }) => {
        return { name, path: path.join(dir, name) };
      });
  },
};
