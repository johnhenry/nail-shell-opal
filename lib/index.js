const fs = require('fs-extra');
const path = require('path');
const cwd = process.cwd();
const exec  = require(`child_process`).execSync;
module.exports = ({
  config,
  source,
  destination = 'script.js'
} = {
  destination : 'script.js'
}) => new Promise((resolve, reject) => {
    const resolvedSource = path.resolve(cwd, source);
    const resolvedDestination = path.resolve(cwd, config.dir, destination);
    const command = `opal --compile ${resolvedSource} > ${resolvedDestination}`;
    exec(command);
    resolve(true);
  });
