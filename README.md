# E-Commerce Back End

## Vladimir Berka's Homework #13

## Assignment Description

This is a Javascript homework assignment for the UW Bootcamp. The goal of the assignment is to create the backend functionality for an online "warehouse". The Javascript file is the primary challenge of this assignment with user information persisting, stored, and accessed using mySQL databases. "Inquirer", "express", "mySQL2", and "sequelize" NPM packages shall be used. The entirety of the application will be run from the console.

A mockup is provided by the instructor to demonstrate desired application appearance and functionality.

The original user story, acceptance criteria, and mockup for the assignment is copied to the end of this document.

## Assignment Scope

Write the backend javascript code to allow users to Create, Retrieve, Update, and Destroy (CRUD) database information using routes between an express session and the server side mySQL database.
Testing and usage of routes will be through `Insomnia`.

Portions of the backend code have been provided. The focus of the assignement is to complete all route files, and models for the database.

## Generalized Tasks

- Use routes to navigate and access information
- Write a javascript file with multiple functions to handle CRUD operations.
- Write multiple route request in Insomnia to manipulate server side databases

## List of Files

- README.md - This current read me file
- gitignore - Git Ignore file to ignore node_modules, DS.Store, (Mac users), .env
- server.js - The primary javascript file that runs the application
- db/ - The primary directory that contains database information in JSON format
- models/ - The directory which stores all model configurations and connectivity
- routes/ - The dirctory which contains all route files and miscellaneous custom middleware
- config/ - The directory which contains the connection.js file for sequelize connectivity
- package.JSON - JSON package that stores modules and settings used
- ~./assets/- Folder for stored screenshots and instructor provided demo.gif

# Original Homework Assignment Details

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## URL to the GitHub Repository

[GitHub Pages Link:https://github.com/vlad-berka/E_Commerce_Backend](https://github.com/vlad-berka/E_Commerce_Backend)

## URL to the Recorded Video of Application Functionality

![Vladimir Berka's E-Commerce, Back End Functionality](https://drive.google.com/file/d/1qfoZmEwe1KWkNX8Yh15omfxEswErjzms/view)

## Instructor Provided Mock-Up

The following instructor provided gif's demonstrate the desired application functionality through `Insomnia`:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./assets/13-orm-homework-demo-01.gif)
![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./assets/13-orm-homework-demo-02.gif)
![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./assets/13-orm-homework-demo-03.gif)

## License

MIT License

Copyright (c) [2022] [Vladimir Berka]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
