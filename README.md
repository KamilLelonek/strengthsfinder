# strengthsfinder-api

## Setup

Install all projec dependencies:

    npm i

Create environment configuration based on the example:

    cp .env.example .env

## Development

Run application server:

    npm run local

### Flow

    app -> server -> router -> matcher -> spreadsheet -> mapper

## Production

Run application server:

    npm start

## Usage

The available endpoints are:

- `GET /:name`
