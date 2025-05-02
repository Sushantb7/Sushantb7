// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://8c447d346105aef6bb0420154978236d@o4509251345580032.ingest.us.sentry.io/4509251352526848",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations:[
    Sentry.mongoIntegration()
  ]
});