import * as React from 'react';
import { ItemInfo } from './known-config';

export interface RootProps {
    items: ItemInfo[];
}

export class Root extends React.Component<RootProps> {
    render() {
        const { items } = this.props;
        return <div>
            <div>hi</div>
            <ul>
                {items.map(item => <li key={item.name}>{item.name}</li>)}
            </ul>
        </div>;
    }
}
