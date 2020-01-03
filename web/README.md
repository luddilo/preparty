# Preparty web

This site is built using NextJS and uses the [Narratory.io](https://narratory.io) dialog-first chat & voice app tool for chat and Zeit.co for hosting.

## Setting up

```shell
$ npm install
```

### Setting up the chat

1. Follow the [Narratory setup docs](https://narratory.io/docs/setup) to set up your first Narratory agent. 
2. Paste in your Google credentials in the `google_credentials.json` file in the root of this repo.

## Running

```shell
$ npm run dev
```

Browse to [localhost:3000](http://localhost:3000) to access the app.

## Deploying on Zeit.co

### Setting up deployment

First, create an account on [zeit.co](https://zeit.co). Then do as follows:

```shell
$ npm install -g now
$ now login # ... and follow the instructions
```

### Deploying

```shell
§ now
```
