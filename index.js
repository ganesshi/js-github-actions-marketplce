const core = require('@actions/core');

async function run() {
  try {
    // 1. Get the 'my-name' input defined in action.yml
    // If no name is provided, it defaults to 'World' via action.yml
    const nameToGreet = core.getInput('my-name');

    // 2. Print the name to the console (the runner's logs)
    console.log(`Hello, ${nameToGreet}! Welcome to my custom action.`);

    // 3. (Optional) Set an output for use in later steps
    core.setOutput("greeting", `Hello ${nameToGreet}`);

  } catch (error) {
    // Fail the action and display the error message in the UI
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
