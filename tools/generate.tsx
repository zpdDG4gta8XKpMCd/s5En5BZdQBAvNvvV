import * as ReactDOMServer from 'react-dom/server';
import { Html } from '../selling/page';
import { Root } from '../selling/root';
import * as React from 'react';

const rendered = ReactDOMServer.renderToString(
    <Html>
        <Root />
    </Html>
);
console.log(rendered);
