# Canvas

<p align='center'>
  <img src='https://i.imgur.com/0Szj0Wh.png' width='200px' >
</p>

Canvas, a <a href='https://fiverr.com'>Fiverr</a> clone, is an app for users to discover and hire freelance artists, or create an 'Artist Page' to receive work inquiries. It is built using React.js, Redux.js, Python, and Flask.

View live: <a href='https://canvas-proj.herokuapp.com/'>Canvas App</a>

<br />

## Features:

<br />

- Sign up/in with email
- Search by username or artist tags
- Create, edit, and delete a personalized artist page
- Create, edit, and delete artwork posts on your artist page
- Create, edit, and delete work requests for users, who are hiring. Accept and complete work requests for artists
- Add/delete artist tags on your artist page
- Send messages to artists / users
- AWS image upload for posts, profile picture, artist page header, and completed job artwork.
  <br />
  <br />

## Home Page:

<img src='https://i.imgur.com/vnTnK8Z.jpeg' width='500px' />
<br />
<br />

## Artist Page:

<img src='https://i.imgur.com/m5y6t6I.jpeg' width='500px' />
<br />
<br />

## Profile Page:

<img src='https://i.imgur.com/0tDd9NI.png' width='500px' />
<br />
<br />

## Technologies Used:

<br />

- Languages:
  ![](https://img.shields.io/badge/-JavaSript-ffffff?style=flat-square&logo=javascript&logoColor=ff0000)
  ![](https://img.shields.io/badge/-Python-ffffff?style=flat-square&logo=python&logoColor=ff0000)
- Frontend:
  ![](https://img.shields.io/badge/-React-ffffff?style=flat-square&logo=react&logoColor=ff0000)
  ![](https://img.shields.io/badge/-Redux-ffffff?style=flat-square&logo=redux&logoColor=ff0000)
  ![](https://img.shields.io/badge/-CSS3-ffffff?style=flat-square&logo=css3&logoColor=ff0000)
  ![](https://img.shields.io/badge/-HTML5-ffffff?style=flat-square&logo=html5&logoColor=ff0000)
- Backend:
  ![](https://img.shields.io/badge/-Flask-ffffff?style=flat-square&logo=flask&logoColor=ff0000)
  ![](https://img.shields.io/badge/-SQLAlchemy-ffffff?style=flat-square&logo=sqlalchemy&logoColor=ff0000)

<br />

## My Information:

<br />

Owen Iwamasa:
<br />
<a href='owiwamasa@gmail.com'>
<img src="https://i.imgur.com/jLLwTjh.png" width="25" height="25">
</a>
<a href='https://www.linkedin.com/in/owen-iwamasa-6ab3a9166/'>
<img src="https://logodix.com/logo/91031.png" width="25" height="25">
</a>
<a href='https://github.com/owiwamasa'>
<img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="25" height="25">
</a>
<br />
<br />

## Getting started (Installation)

<br />

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/owiwamasa/sidewalk-surfer-proj
   ```

2. Install dependencies

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Install DatePicker

   ```bash
   npm install react-datepicker --save
   ```

4. Create a **.env** file based on the .env.example with proper settings for your
   development environment

5. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

6. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

8. Start up Flask and React

   -At the root of the project folder, run:

   ```bash
   flask run
   ```

   -In the react-app folder, run:

   ```bash
   npm start
   ```
