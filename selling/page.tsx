import * as React from 'react';

export class Html extends React.Component {
    render() {
        return <html>
            <head>
                <link rel="stylesheet" type="text/css" href="./styles/all.css" />
            </head>
            <body>
                <div id="root">
                    {this.props.children}
                </div>
                <script src="./require-config.js"></script>
                <script src="./node_modules/requirejs/require.js" data-main="printies/root"></script>
            </body>
        </html>;
    }
}
