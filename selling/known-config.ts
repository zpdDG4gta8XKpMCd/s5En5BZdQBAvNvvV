/// <amd-dependency name="json" path="text!config.json" />

declare const json: string;

export interface ItemInfo {
    name: string;
    link: string;
    image: string;
}

export interface ConfigInfo {
    items: ItemInfo[];
}

export function toKnownConfig(): ConfigInfo {
    return JSON.parse(json) as ConfigInfo;
}
