// Case 4: How to Apply Video, Screenshot & Trace

// In playwright.config.js file, we have to apply these changes.
 
// In playwright and config File we have to update it:

// /* Configure projects for major browsers */
//
  projects: [

    {

      name: 'chromium',

      use: { ...devices['Desktop Chrome'],

        viewport: { width: 1536, height: 864 },

        video: 'on',

        screenshot: 'on',

        trace: 'on'

      },

    },

  ];