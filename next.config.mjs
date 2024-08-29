import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
};

// Set up the bundle analyzer, enabled only when ANALYZE is 'true'
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Export the final configuration with the bundle analyzer applied
export default bundleAnalyzer(nextConfig);
