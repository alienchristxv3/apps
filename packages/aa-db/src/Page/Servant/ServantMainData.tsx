import React from "react";
import Region from "../../Api/Data/Region";
import Servant from "../../Api/Data/Servant";
import ClassIcon from "../../Component/ClassIcon";
import CommandCard from "../../Component/CommandCard";
import DataTable from "../../Component/DataTable";
import RawDataViewer from "../../Component/RawDataViewer";
import RarityDescriptor from "../../Descriptor/RarityDescriptor";
import {formatNumber} from "../../Helper/OutputHelper";

interface IProps {
    region: Region;
    servant: Servant;
    assetType?: string;
    assetId?: string;
}

class ServantMainData extends React.Component<IProps> {
    render() {
        const servant = this.props.servant;

        return (
            <div>
                <h1>
                    <ClassIcon className={servant.className} rarity={servant.rarity} height={50}/>
                    &nbsp;
                    {servant.name}
                </h1>

                <DataTable data={{
                    "Data": <RawDataViewer data={servant}/>,
                    "Raw": <RawDataViewer data={`https://api.atlasacademy.io/raw/${this.props.region}/servant/${this.props.servant.id}?expand=true&lore=true`}/>,
                    "ID": servant.id,
                    "Collection": servant.collectionNo,
                    "Name": servant.name,
                    "Class": servant.className,
                    "Rarity": <RarityDescriptor rarity={servant.rarity}/>,
                    "Cost": servant.cost,
                    "Attribute": servant.attribute,
                    "Max Lv.": servant.lvMax,
                    "Hp": <div>
                        Base: {formatNumber(servant.hpBase)}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Max: {formatNumber(servant.hpMax)}
                    </div>,
                    "Atk": <div>
                        Base: {formatNumber(servant.atkBase)}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Max: {formatNumber(servant.atkMax)}
                    </div>,
                    "Cards": <div>
                        {servant.cards.map((card, index) => {
                            return <CommandCard key={index}
                                                height={60}
                                                card={card}
                                                servant={servant}
                                                assetType={this.props.assetType}
                                                assetId={this.props.assetId}/>;
                        })}
                    </div>,
                }}/>
            </div>
        );
    }
}

export default ServantMainData;
