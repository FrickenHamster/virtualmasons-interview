# Virtual Masons Take Home Project

Hello! This challenge is to build a simple little React app that displays top news articles from the NYTimes API.

# General Guidelines:
- This challenge is timeboxed to three hours. We understand this is an ambitious undertaking and that this may not be enough time to complete the entire feature set--just get as far as you can. Make sure to leave enough time to commit and push your work.
- This repo was built off of `create-react-app` and has some basic configuration and set up to get you up and running quickly. To get started, just fork the repo, run `yarn`, and hack away.
- Your project should be shared via either Github or Bitbucket. Please include a README.md and setup script or instructions sufficient to allow us to run your app locally.

# Other Considerations
- The only tooling requirement is that you use React. You may use any additional libraries or packages as you see fit.
- While attention to aesthetics is appreciated, we'd much rather see a fuller feature set than pixel-perfect styling.
- Using base projects, tutorials, or any other resources is absolutely allowed, though please be transparent and communicate what resources you used.
- If you cannot implement part of your intended design, call out the differences between what you actually implemented and your desired implementation. Do this either in the README or with code comments.
- If you have the time, please include a short explanation of what additional steps you would take (and why) if this were a production app.

# App Features
1. Prepare to fetch data from the NYTimes
	- Create an account at https://developer.nytimes.com and request an API key to use with the "Top Stories API"
	- If needed, set-up directions can be found here: https://developer.nytimes.com/get-started
2. Fetch and display a list of Top Stories
	- A user should be able to select a "section" (e.g. arts, food, politics) from a list of section options so that they can search for Top Stories for that section.
		- Section options can be found in the API documentation.
	- After searching, a user should see a list of the first 30 Top Stories results.
	- A user should be able to see the title, abstract, byline, and thumbnail image of each top story.
	- A user should be able to click on the title of each story to open (link to) the actual NYTimes article in another browser tab.
3. Implement a Top Stories text filter
	- A user should be able to filter their Top Stories results with text that they input.
		- The filter text should at least match against the story title, but could match on additional top story attributes too.

# What We're Evaluating
- Architecture: Is the component structure well-crafted and does it encourage component reuse?  
- Readability: Is the code easy to read and understand? Does it describe how the app functions?
- Data Flow: Is it easy to reason about the flow and state of data? Does the handling of data manage complexity?
- Code Cleanliness & Quality: Is the code clean, consistent, and maintainable? Is it characteristic of idiomatic React and Javascript?
- Technical Choices: Do the choices of any additional libraries or packages seem reasonable and appropriate?
- Correctness: Is the code pushed to a repository and include the directions to run the app locally? Does the README communicate any gaps in implementation? 
