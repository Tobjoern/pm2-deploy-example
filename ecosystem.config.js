module.exports = {
  apps: [{
    name: "main-app",
    script: "./lib/index.js",
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    },
    // app will restart, if it exceeds this memory amount!
    // max_memory_restart
  }],

  deploy: {
    production: {
      "user": "root",
      "host": ["46.101.181.71"],
      "ref": "origin/main",
      "repo": "git@github.com:Tobjoern/pm2-deploy-example.git",
      "path": "/root/apps/my-app",
      "post-deploy": "npm install"
    }
  }
}
