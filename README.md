# Coffee App

///
NAME OF PROJECT: 
Carmen's Coffee Corner

///
Github Repo
https://github.com/karlalockhart/coffee-app

///
URL (if deployed)
https://karlalockhart.github.io/coffee-app


///
DESCRIPTION:
This single page application (SPA) is about adding your favorite coffee drinks. It's a site for coffee lovers like Carmen, that gathers a collection of coffee drinks including the name of the coffee drink, a description, ingredient list, like count, and favorite coffee drinks page. The collection is added to a mock api via db.json. This SPA uses ReactJS (JSX), with some HTML & CSS.

///
HOW TO RUN THE APP
>Runs as a Single Page Application (SPA). Single ReactJS, HTML, CSS files.
>Communicates via db.json using json-server --watch db.json
>All interactions between the client and the API are handled asynchronously and uses ReactJS as the framework. No API key is required as it is an open API.
>No redirects. No page reloads.
>

1. Upon opening web site/application > begin typing into the search input (i.e. Name of Coffee Drink - "Latte; By Ingredients - "Espresso");

2. A list of coffee drinks will filter out from entire collection of coffee drinks

3. You can then click on the coffee drink card for more coffee details like a list of ingredients

4. To add more coffee drinks, click on the "Add Coffee" page. Fill out the input boxes including coffee name, coffee description, coffee ingredients, and coffee url. Then click the "Add Coffee Drink" button to submit information. The new coffee card will appear in the Home page at the bottom of the screen.

5. You can also choose your favorite coffee drinks to be added to the favorites page by clicking on the favorites star.

Page Organization:
>top: Header > Title of Project: Carmen's Coffee Corner
>top: navigation area > home (coffee cards), add coffee (coffee form), favorites
>container: coffee card content (image, name, description) & details of ingredients (Details button), like count, like button, star button (favorites)
>bottom: footer > copyright content

Open API to utilize:
db.json - http://localhost:3001/


///
LIST OF FEATURES:
The core MVP/site features will include the following:

single page app (using one index.html file using create-react-app)

6 components
1. Navbar.js 
2. Home.js
3. AddCoffee.js
4. CoffeeForm.js
5. Favorites.js
6. Footer.js

3 client-side routes using React Router
1. Home.js
2. AddCoffee.js
3. Favorites.js

Each coffee card includes the following attributes:
1. Name:
2. Image:
3. Description:
4. Ingredients List:
5. Like Count & Button


-As a user, I want to be able to "Search" specifically for specific coffee drinks (i.e. americano).
-As a user, I want to be able to "Add" my own coffee drinks using specific attributes such as name, image (url), description, and ingredients.
-As a user, I want to be able to star my "favorite" coffee drinks and save on the favorites page.


///
VISUALS:

Images: 
coffee images credit to: freepik.com

Youtube:
Here's the link to Youtube video: 
https://www.youtube.com/watch?v=jzzsFiWVkaY


///
INSTALLATION:

REQUIREMENTS:
-Installation of Chrome

///
USAGE:


///
SUPPORT:


///
PROJECT STATUS:
Development has slowed down. I will continue making efforts on this project.