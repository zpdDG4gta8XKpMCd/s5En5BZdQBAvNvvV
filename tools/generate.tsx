import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Html } from '../selling/page';
import { Root } from '../selling/root';
import * as fs from 'fs';
import { ConfigInfo } from '../selling/known-config';

const [configPath] = process.argv.slice(2);
const json = fs.readFileSync(configPath, 'utf-8');
const config = JSON.parse(json) as ConfigInfo;
const rendered = ReactDOMServer.renderToString(
    <Html>
        <Root items={config.items} />
    </Html>
);
console.log(rendered);
