<div  align="center">
<img src="https://res.cloudinary.com/dbpfwb5ok/image/upload/v1659148545/portofolio/recipe/2_kpnvj7.png" alt="Logo" width="150px">
 </div>
  <div align="center">
  <br />
  <br />
  <a href="https://github.com/dec0dOS/amazing-github-template/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/dec0dOS/amazing-github-template/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  .
  <a href="https://github.com/dec0dOS/amazing-github-template/discussions">Ask a Question</a>
</div>

## About the Project

A small full-stack project built with Postgres, Express, React and Node.
<br/>
[![Node.js](https://img.shields.io/badge/Node.js-v.16.14.0-green.svg?style=for-the-badge&logo=appveyor)](https://nodejs.org/) 
[![Express.js](https://img.shields.io/badge/Express.js-4.17.3-orange.svg?style=for-the-badge&logo=appveyor)](https://expressjs.com/en/starter/installing.html) 
[![PostgreSQL](https://img.shields.io/badge/postgresql-v14.2-blue?style=for-the-badge&logo=appveyor)](https://www.postgresql.org/) 
<br>
![Lines of code](https://img.shields.io/tokei/lines/github/zeronerocode/ZeroShopServer?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/zeronerocode/ZeroShopServer?style=for-the-badge)
![GitHub Discussions](https://img.shields.io/github/discussions/zeronerocode/ZeroShopServer?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/zeronerocode/zeroshopreact?style=for-the-badge)

## Requirements

1. [Node Js](https://nodejs.org/en/download/)
2. [Express JS](https://expressjs.com/en/starter/installing.html)
3. [Postman](https://www.getpostman.com/)
4.  Web Server (ex. localhost)
5.  Code Editor (VS Code, Sublime, Atom, etc)

## Run Locally
Clone the project

```bash
  git clone https://github.com/zeronerocode/FoodRecipe.git
```
Go to the project directory

```bash
  cd FoodRecipe
```
Install dependencies

```bash
  npm install
```
Rename .env.example to .env

## Setup .env file
Open **.env** file on code editor and copy the code below :

```
# app
SERVER_PORT=4000

# database
DB_HOST="Your_Host"
DB_USERNAME="Your_Username"
DB_PASSWORD="Your_Password"
DB_DATABASE ="Your_Table"
DB_PORT = "Your_DB_port"


# jwt
SECRET_KEY = "your secret key"

# cloudinary
CLOUD_NAME = "cloud name"
API_KEY = "api key "
API_SECRET = "secret key"


```
## Related Project

:rocket: [`Backend MamaRecipe`](https://github.com/zeronerocode/FoodRecipe/)

:rocket: [`Frontend MamaRecipe`](https://github.com/zeronerocode/foodrecipe-next/)

:rocket: [`Web Service`](https://food-recipe-server.herokuapp.com/)

:rocket: [`Demo MamaRecipe`](https://foodrecipe-eosin.vercel.app/)
