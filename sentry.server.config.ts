// // // This file configures the initialization of Sentry on the server.
// // // The config you add here will be used whenever the server handles a request.
// // // https://docs.sentry.io/platforms/javascript/guides/nextjs/

// // import * as Sentry from "@sentry/nextjs";

// // Sentry.init({
// //   dsn: "https://21944b90130c48075728ee555eb877d3@o4507718997508096.ingest.us.sentry.io/4507719006617600",

// //   // Adjust this value in production, or use tracesSampler for greater control
// //   tracesSampleRate: 1,

// //   // Setting this option to true will print useful information to the console while you're setting up Sentry.
// //   debug: false,

// //   // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
// //   // spotlight: process.env.NODE_ENV === 'development',
  
// // });

// import * as Sentry from "@sentry/nextjs";

// Sentry.init({
//   dsn: process.env.SENTRY_DSN || "https://21944b90130c48075728ee555eb877d3@o4507718997508096.ingest.us.sentry.io/4507719006617600",
  
//   // Use different tracesSampleRate for production and development
//   tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1.0, // Adjust the trace sampling rate
  
//   // Enable debug mode only during development
//   debug: process.env.NODE_ENV === 'development',

//   // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
//   // spotlight: process.env.NODE_ENV === 'development',
// });

