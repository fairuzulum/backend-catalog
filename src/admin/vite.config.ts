import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: true,
      port: 1337, // Default Strapi port
      host: 'strapi.fairuzulum.me',
      strictPort: true, // Ensure the server uses the specified port
    },
  });
};
