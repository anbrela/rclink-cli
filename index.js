#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const os = require('os');

// Define folder to save the files
const RC_FOLDER = path.join(os.homedir(), '.rc_files');
const RC_FILE = path.join(os.homedir(), '.npmrc');

function linkRc(alias) {
    const rcPath = path.join(RC_FOLDER, `.npmrc.${alias}`);
    
    if (!fs.existsSync(rcPath)) {
        console.error(`Error: File not found - ${rcPath}`);
        process.exit(1);
    }

    try {
        fs.copySync(rcPath, RC_FILE);
        console.log(`Linked: ${alias} -> ~/.npmrc`);
    } catch (err) {
        console.error(`Error linking file: ${err.message}`);
    }
}

function unlinkRc() {
    try {
        fs.removeSync(RC_FILE);
        console.log(`Unlinked: ~/.npmrc removed`);
    } catch (err) {
        console.error(`Error unlinking file: ${err.message}`);
    }
}

function showHelp() {
    console.log(`
Usage: rclink-cli <alias> [--help] [unlink]

Commands:
  <alias>    Link the specified .npmrc file from ~/.rc_files to ~/.npmrc
  unlink     Remove the ~/.npmrc file
  --help     Show this help message
`);
}

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help')) {
    showHelp();
    process.exit(0);
}

const command = args[0];

if (command === 'unlink') {
    unlinkRc();
} else {
    linkRc(command);
}
