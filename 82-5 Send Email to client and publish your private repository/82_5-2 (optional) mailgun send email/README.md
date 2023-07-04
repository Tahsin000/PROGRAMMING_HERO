# 82_5-1 (optional) send grid email setup

- ### [mailgun](https://www.mailgun.com/)

- ### [nodemailer mailgun transport](https://www.npmjs.com/package/nodemailer-mailgun-transport)

```js
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const auth = {
  auth: {
    api_key: "key-1234123412341234",
    domain:
      "one of your domain names listed at your https://app.mailgun.com/app/sending/domains",
  },
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));
```
