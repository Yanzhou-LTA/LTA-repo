import { defineConfig } from "slidev";
import mdMdc from "markdown-it-mdc";

export default defineConfig({
  // Register markdown-it-mdc so slides can use mdc markdown/frontend features
  markdown: {
    markdownItSetup(md) {
      // markdown-it-mdc adds support for MDC-like blocks and syntax
      md.use(mdMdc);
    },
  },
});
