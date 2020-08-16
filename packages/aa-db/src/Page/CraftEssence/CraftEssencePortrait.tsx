import {CraftEssence} from "@atlasacademy/api-connector";
import React from "react";

import "./CraftEssencePortrait.css";

interface IProps {
    craftEssence: CraftEssence.CraftEssence;
}

class CraftEssencePortrait extends React.Component<IProps> {

    private asset(): string | undefined {
        const assetMap = this.props.craftEssence.extraAssets.charaGraph.equip;
        if (!assetMap)
            return undefined;

        return Object.values(assetMap).shift();
    }

    render() {
        const asset = this.asset();

        return (
            <div>
                <img alt={this.props.craftEssence.name}
                     id={'craft-essence-portrait'}
                     src={asset}/>
            </div>
        );
    }
}

export default CraftEssencePortrait;
