import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DataVal, Func, Region } from "@atlasacademy/api-connector";

import Api from "../Api";
import {
    getDataValList,
    getFollowerDataValList,
    getMutatingFieldValues,
    getStaticFieldValues,
    getTargetFollowerVersionValues,
    getTargetVersionValues,
    hasFollowerDataVals,
} from "../Helper/FuncHelper";
import { Renderable, joinElements } from "../Helper/OutputHelper";
import { FuncDescriptorSections } from "./Func/FuncDescriptorSections";
import handleActionSection from "./Func/handleActionSection";
import handleAffectsSection from "./Func/handleAffectsSection";
import handleAmountSection from "./Func/handleAmountSection";
import handleChanceSection from "./Func/handleChanceSection";
import handleConditionSection from "./Func/handleConditionSection";
import handleDurationSection from "./Func/handleDurationSection";
import handleLinkageSection from "./Func/handleLinkageSection";
import handleOnFieldSection from "./Func/handleOnFieldSection";
import handleOptionSection from "./Func/handleOptionSection";
import handleScalingSection from "./Func/handleScalingSection";
import handleTargetSection from "./Func/handleTargetSection";
import handleTeamSection from "./Func/handleTeamSection";

interface IProps {
    region: Region;
    func: Func.BasicFunc;
    level?: number;
    levels?: number[];
    overcharge?: number;
}

interface IState {
    dependFunc?: Func.BasicFunc;
}

class FuncDescriptor extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const dataVal = this.getDataVal();
        if (dataVal.DependFuncId !== undefined) {
            Api.funcBasic(dataVal.DependFuncId).then((dependFunc) => this.setState({ dependFunc }));
        }
    }

    getDataVal(): DataVal.DataVal {
        const func = this.props.func;

        if (this.props.level) {
            return getTargetVersionValues(func, this.props.level, this.props.overcharge ?? 1) ?? {};
        } else {
            const dataVals = getDataValList(func);

            if (this.props.levels) {
                return getStaticFieldValues(this.props.levels.map((i) => dataVals[i - 1]));
            } else {
                return getStaticFieldValues(dataVals);
            }
        }
    }

    getMutatingVal(): DataVal.DataVal[] {
        return getMutatingFieldValues(getDataValList(this.props.func));
    }

    getFollowerDataVal(): DataVal.DataVal | undefined {
        const func = this.props.func;

        if (!hasFollowerDataVals(func)) return undefined;

        if (this.props.level) {
            return getTargetFollowerVersionValues(func, this.props.level) ?? {};
        } else {
            const dataVals = getFollowerDataValList(func);

            return getStaticFieldValues(dataVals);
        }
    }

    render() {
        const region = this.props.region,
            func = this.props.func,
            dataVal = this.getDataVal(),
            mutatingDataVal = this.getMutatingVal(),
            followerDataVal = this.getFollowerDataVal();

        const sections = new FuncDescriptorSections();

        handleOptionSection(region, sections, func, dataVal);
        handleTeamSection(region, sections, func, dataVal);
        handleConditionSection(region, sections, func, dataVal);
        handleChanceSection(region, sections, func, dataVal);
        handleActionSection(region, sections, func, dataVal, this.state.dependFunc);
        handleAmountSection(region, sections, func, dataVal, mutatingDataVal, false, this.state.dependFunc);
        handleOnFieldSection(region, sections, func, dataVal);
        handleAffectsSection(region, sections, func, dataVal);
        if (followerDataVal) {
            handleAmountSection(region, sections, func, followerDataVal, mutatingDataVal, true, this.state.dependFunc);
        }
        handleTargetSection(region, sections, func, dataVal, this.state.dependFunc);
        handleDurationSection(region, sections, func, dataVal);
        handleLinkageSection(region, sections, func, dataVal);
        handleScalingSection(region, sections, func, dataVal);

        let parts: Renderable[] = [];

        Object.values(sections).forEach((section) => {
            if (!section.showing) return;

            if (section.preposition) parts.push(section.preposition);

            parts = parts.concat(section.parts);
        });

        parts.push(
            <Link to={`/${region}/func/${func.funcId}`}>
                <FontAwesomeIcon icon={faShare} title={`Go to ${region} function ${func.funcId}`} />
            </Link>
        );

        parts = joinElements(parts, " ");

        return (
            <span>
                {parts.map((element, index) => {
                    return <React.Fragment key={index}>{element}</React.Fragment>;
                })}
            </span>
        );
    }
}

export default FuncDescriptor;

export function FuncDescriptorId(props: {
    region: Region;
    funcId: number;
    level?: number;
    levels?: number[];
    overcharge?: number;
}) {
    const [func, setFunc] = useState<Func.BasicFunc>(null as any);
    useEffect(() => {
        Api.funcBasic(props.funcId).then((s) => setFunc(s));
    }, [props.region, props.funcId]);
    if (func !== null) {
        return (
            <FuncDescriptor
                region={props.region}
                func={func}
                level={props.level}
                levels={props.levels}
                overcharge={props.overcharge}
            />
        );
    } else {
        return null;
    }
}
