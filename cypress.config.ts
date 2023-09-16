import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 5000, pageLoadTimeout:4000,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
});

