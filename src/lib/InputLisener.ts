import { readFile } from "fs";
import * as readline from "readline";
import { stdin as input, stdout as output } from 'node:process';

export const rl = readline.createInterface({ input, output });