module.exports = {
  apps: [
    {
      name: "kalvenit-site",
      script: "server.js", // Change this to your actual entry file
      env: {
        NODE_ENV: "development",
        EMAIL_USER: "kalvengroup@gmail.com",
        EMAIL_PASS: "ifto snop jjjq dvpx"
      },
      env_production: {
        NODE_ENV: "production",
        EMAIL_USER: "kalvengroup@gmail.com",
        EMAIL_PASS: "ifto snop jjjq dvpx"
      }
    }
  ]
};

