const fs = require('fs-extra');
const path = require('path');
const cwd = process.cwd();
const exec  = require(`child_process`).execSync;
module.exports = (opts) => new Promise((resolve, reject) => {
    const options = opts;
    const config = options.config;
    const source = options.source;
    const destination = options.destination || 'script.js';
    const resolvedSource = path.resolve(cwd, source);
    const resolvedDestination = path.resolve(cwd, config.dir, destination);
    const command = `opal --compile ${resolvedSource} > ${resolvedDestination}`;
    exec(command);
    resolve(true);
  });
