# Social-Network-API

## Description

An Social Network API, using Express and Mongoose, with a MongoDB database.

**Tools & Skills Used**<br>
Express.js, Mongoose, and MongoDB.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

Here are some guidelines to help you get started:

- Git Clone the Repo:

```
git clone git@github.com:carlincb/Social-Network-API.git
```

- Create a `.gitignore` file and include `node_modules/` and `.DS_Store`, so that these directories are not tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

- Your application should use [Express.js](https://www.npmjs.com/package/express) for routing, [MongoDB](https://www.mongodb.com/) as the database, and [Mongoose](https://www.npmjs.com/package/mongoose) packages. You should have MongoDB installed on your computer. Please follow the [MongoDB Installation Guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB locally. Express and Mongoose are included as dependencies and should be installed by running the following command in the current working directory for this application:

```
npm install
```

- Open your terminal from the root of the file and enter:

```
npm run start
```

- or:

```
npm run dev
```

- The application will be invoked by using the following command:

```bash
node server.js
```

- Finally, the GET, POST, PUT, and DELETE routes can all be tested in [Insomnia Core](https://insomnia.rest/products/insomnia) or similar program.

## Usage

Please see below for examples of this application's usage.

### Video of Usage:

- https://watch.screencastify.com/v/W5fni5cDLzIEZq7g2NLO

## Credits

- https://www.youtube.com/watch?v=ofme2o29ngU
- https://www.youtube.com/watch?v=DZBGEVgL2eE
- https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
- https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mo

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br/>

    MIT License

    Copyright (c) 2021 COLLEEN FIMISTER

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

## Contributing

No contributions needed at this time, but please feel free to contact me at my email address below if you would like to contact me about this project.

## Questions

If you have questions, please contact me at carlin.colleen@gmail.com or find me at https://github.com/carlincb.
