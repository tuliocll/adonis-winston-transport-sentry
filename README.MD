# Adonis Sentry Log

> Sentry logger provider for AdonisJs(legacy)

This package let you make use of sentry as the transporter for your log messages. It is expected to be used with the inbuilt `Logger` provider of AdonisJs(legacy).

## Installation

```bash
adonis install adonis-winston-transport-sentry

# yarn users
adonis install adonis-winston-transport-sentry --yarn
```

Next step is to register the provider as show below:
`start/app.js`

```js
const providers = ["adonis-winston-transport-sentry/providers/SentryProvider"];
```

Now, you are all set to make use of this provider. Just make sure to define the required configuration and set `transporter=sentry`.

## Config

```js
module.exports = {
  logger: {
    transport: "sentry",

    sentry: {
      driver: "sentry-log",
      sentry: {
        dsn: "https://******@sentry.io/12345",
      },
      level: "info",
    },
  },
};
```
