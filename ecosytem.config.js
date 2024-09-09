module.exports = {
    apps: [
      {
        name: 'tabi_backend',
        script: 'npx babel-node src/server.js',
        interpreter: 'none',
        watch: true,
        ignore_watch: ['node_modules'],
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };