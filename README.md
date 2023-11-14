# Moises - Front-end Growth Test

![Screen](./.github/screen.png)

## Requirements

- The project is bootstraped using [Next.js](https://nextjs.org/).
- Implement this design using React and Typescript.
- You’ll notice the CMS payload contains the home page data in English and Portuguese, meaning the Front-end should be multi-lang, it should also be prepared to easily scale to new languages if necessary.

## What we will evaluate

- React good practices and performance
- Pixel perfect
- Code structure and reusablity
- Semantics

## Bonus Points

- The header and menu should be the same HTML for all breakpoints.
- Good accessibility.

## Getting Started

Clone this repository to get started and run the API server and development server:

```bash
npm run server & npm run dev
```

**`/global?locale=en|pt`**

The global route returns an object filtered by locale param to generate common components of the layout: header, footer, and social links.

**`/pages?locale=en|pt`**

The pages route returns an array of pages filtered by locale param, meaning the front-end should seamlessly render whichever pages are returned from the API.

At the end the website should be statically built, no requests should be made to the CMS mock server during run time.

## Submission

Upon completing the test, publish your project to a URL (Vercel, Netlify, etc.) and send the your repo link to the informed email instead of submitting a pull-request.

Good luck! 🚀
