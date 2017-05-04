#!/usr/bin/env node
const { spawnSync } = require('child_process');

const appName = '📦  dockerpkg'

const instanceName = 'dockerpkg-builder';
const imageName = 'dockerpkg/builder:latest';
const workingDir = process.cwd();

const command = 'docker';
const params = [
  'run',
  '--rm',
  '--name', `${instanceName}`,
  '-v', `${workingDir}/:/app/`,
  '-v', `${workingDir}/.pkg-cache/:/root/.pkg-cache`,
  '-t',
  `${imageName}`,
];

console.log(`${appName}: Building app.bin in ${workingDir}`)

const cmd = spawnSync(command, params);

if (cmd.stderr.toString().length) {
  console.error(`${appName}: An error occurred: ${cmd.stderr.toString()}`)
  console.log(`${appName}: Failed
  .`)
  process.exit(1)
}

console.log(`${appName}: Done.`)
