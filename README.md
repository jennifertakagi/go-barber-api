
<!-- Inspired by https://github.com/jennifertakagi/go-barber-api -->

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jennifertakagi/go-barber-api">
    <img src="docs/logo.png" alt="Logo" width="150">
  </a>

  <h3 align="center">Go Barber API</h3>

  <p align="center">
    Manage you Barbershop with this API!
    <br />
    <a href="https://github.com/jennifertakagi/go-barber-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jennifertakagi/go-barber-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/jennifertakagi/go-barber-api/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Manage you Barbershop with this API

Features:
* Route to authenticate a provider
* Route to register a new provider
* Route to show a provider's profile
* Route to update a provider's avatar
* Route to update a provider's profile

* Route to forgot a password
* Route to reset a password

* Route to create an appointment
* Route to list the day availability
* Route to list the month availability
* Route to list the providers
* Route to list the providers' appointments



### Built With

* [Node JS](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [Express JS](https://expressjs.com/)
* [Docker](https://www.docker.com/)
* [TypeORM](https://typeorm.io/#/)
* [PostgreSQL](https://www.postgresql.org/)
* [MongoDB](https://www.mongodb.com/)
* [Redis](https://redis.io/)
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [Handlebars](https://handlebarsjs.com/)
* [Nodemailer](https://nodemailer.com/about/)
* [AWS SDK](https://aws.amazon.com/sdk-for-javascript/)
* [Celebrate](https://www.npmjs.com/package/celebrate)
* [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
* [Tsyringe](https://www.npmjs.com/package/tsyringe)
* [Multer](https://www.npmjs.com/package/multer)
* [Reflect Metadata](https://www.npmjs.com/package/reflect-metadata)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* yarn
  ```sh
  npm install --global yarn
  ```

* [docker](https://docs.docker.com/get-docker/)



### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jennifertakagi/go-barber-api.git
   ```
2. Install packages
   ```sh
   yarn | npm install
   ```
3. Create a Postgress docker image with the following command and options:
   ```sh
  docker run --go-commerce foo -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
   ```
4. Create a MongoDB docker image with the following command and options:
   ```sh
  docker run --name mongodb -p 27017:27017 -d -t mongo
   ```
5. Create a Redis docker image with the following command and options:
   ```sh
  docker run --name redis -p 6379:6379 -d -t redis:alpine
   ```
6. Run database migrations
  ```sh
  yarn typeorm migration:run | npm run typeorm migration:run
  ```
7. Run the local environment
  ```sh
  yarn dev:server | npm run dev:server
   ```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jennifertakagi/go-barber-api/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Jennifer Takagi - [@jennitakagi](https://twitter.com/jennitakagi)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Jest](https://jestjs.io/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jennifertakagi/go-barber-api.svg?style=for-the-badge
[contributors-url]: https://github.com/jennifertakagi/go-barber-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jennifertakagi/go-barber-api.svg?style=for-the-badge
[forks-url]: https://github.com/jennifertakagi/go-barber-api/network/members
[stars-shield]: https://img.shields.io/github/stars/jennifertakagi/go-barber-api.svg?style=for-the-badge
[stars-url]: https://github.com/jennifertakagi/go-barber-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/jennifertakagi/go-barber-api.svg?style=for-the-badge
[issues-url]: https://github.com/jennifertakagi/go-barber-api/issues
[license-shield]: https://img.shields.io/github/license/jennifertakagi/go-barber-api.svg?style=for-the-badge
[license-url]: https://github.com/jennifertakagi/go-barber-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jennifertakagi

