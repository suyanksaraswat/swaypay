// Add this in case internationalization subrouting is required
// -----------------------------------------------------------------------
// module.exports = {
//     i18n: {
//       locales: ['en-US', 'fr'], //support for English and French
//       defaultLocale: 'en-US',
//     },
// }
// -----------------------------------------------------------------------

const { withAxiom } = require("next-axiom");
const { withPlausibleProxy } = require("next-plausible");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(
  withPlausibleProxy()(
    withAxiom({
      reactStrictMode: true,
      experimental: {
        nextScriptWorkers: true,
      },
      swcMinify: true,
      typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      }
    }),
  ),
);
