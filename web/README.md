# Preparty web

This site is built using NextJS and uses our (currently) properiatery chat authoring tool on top of DialogFlow for chat and Zeit.co for hosting.

## Setting up

```shell
$ npm install
```

### Setting up DialogFlow

1. Create an account on [Dialogflow](https://dialogflow.com/)
2. Follow their instructions and create an agent (choose the 2.0 API and create a new Google Cloud Project for it)
3. If you don't already, make sure you have [enabled billing for the GCP account](https://console.cloud.google.com/billing/linkedaccount)
4. [Enable the DialogFlow API](https://console.cloud.google.com/apis/library/dialogflow.googleapis.com?q=dialogflow) for the GCP-project
5. Create a [Google Cloud service-account](https://console.cloud.google.com/apis/credentials?authuser=1&folder=&organizationId=&) for the created project, with role **DialogFlow API Client**
6. Create a key (of type JSON) for the new service-account, download it into the root of this project and rename the file `google_credentials.json`

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
