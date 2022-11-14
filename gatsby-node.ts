// https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/
// https://www.gatsbyjs.com/docs/reference/release-notes/v4.9/#support-for-typescript-in-gatsby-config-and-gatsby-node
// https://stackoverflow.com/a/67335037/470749
// https://stackoverflow.com/q/72958730/470749
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        //crypto: require.resolve('crypto-browserify'), // TODO: Figure out how to get this to work.
        //path: require.resolve('path-browserify'), // https://stackoverflow.com/a/67172790/470749
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
      },
    },
  });
};
