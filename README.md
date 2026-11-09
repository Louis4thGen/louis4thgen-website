# Louis4thGen Website

The Louis4thGen website and AI assistant interface prototype. Louis for everyone.

## Website

[Visit the Vercel deployment](https://louis4thgen-website.vercel.app)

This repository contains the branded homepage, login flow, session selection, and chat interface. It is a proof of concept under development.

## Project status

- Vercel production deployments are recorded in this repository.
- The latest application changes simplify the homepage to “Hi I'm Louis,” remove marketing packages from login, and use white backgrounds for the circular logos.
- Password-based authentication changes are recorded in the commit history.
- Live OpenClaw integration and production readiness still need verification. The original demo used simulated chat responses and a cost ticker; these should not be treated as confirmation of a live backend or actual billing.

## Run locally

Install Node.js and npm, then run:

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other available commands:

```sh
npm run build
npm start
npm run lint
```

`npm start` serves the production build after `npm run build`.

## Stack and structure

- Next.js 14.0.4 and React 18
- JavaScript and CSS
- Vercel deployment

| Directory | Purpose |
| --- | --- |
| `pages/` | Application pages and routes |
| `lib/` | Shared application logic |
| `public/` | Logos and other static assets |
| `styles/` | Site styling |

See [DEPLOY.md](DEPLOY.md) for deployment notes. Confirm the current hosting configuration before following older setup instructions.

## Next steps

- Verify the deployed login and session flow.
- Confirm the chat backend connection and replace any remaining simulated behavior.
- Review authentication, dependencies, and configuration before wider use.
- Keep deployment instructions aligned with the current environment.
