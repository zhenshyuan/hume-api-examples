<div align="center">
  <img src="https://storage.googleapis.com/hume-public-logos/hume/hume-banner.png">
  <h1>Expression Measurement | Next.js Streaming Example</h1>
  <p>
    <strong>Real-time Streaming of Facial Expressions.</strong>
  </p>
</div>

## Overview

This repo now focuses solely on facial expression streaming. Provide your Hume API key through a `.env.local` file and the app will immediately start capturing your webcam feed and streaming frames to Hume without any login step.

You can try it out here: https://hume-sandbox.netlify.app

## Requirements

- [Node](https://nodejs.org/)
- A Hume API key exposed as `NEXT_PUBLIC_HUME_API_KEY` in `.env.local`

## Development

```bash
$ npm install
$ npm run dev
```

Create a `.env.local` file in `expression-measurement/streaming/next-js-streaming-example/` that contains:

```bash
NEXT_PUBLIC_HUME_API_KEY=your_hume_api_key_here
```

Development mode will start serving on `localhost:3001` and automatically begin facial expression detection.

## Production

The sandbox deploys on Netlify on merge to the main branch.
