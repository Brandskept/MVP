# MVP

This repository contains a very small prototype for the BrandSkept platform. A minimal Express API and a few Next.js style pages demonstrate how brands can create polls/A/B tests and how consumers can participate and track points.

## Running

The project assumes `node` is available. Dependencies such as `express` or `next` are not bundled. In a real environment you would run `npm install` before starting the server.

```bash
npm start
```

The API will run on port 3000 by default.

## Testing

No real automated tests are included. Running:

```bash
npm test
```

will attempt to start the API in test mode.
