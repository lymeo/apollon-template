import {start, setConfig, config} from "@lymeodev/apollon";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

setConfig({root: __dirname});

start();