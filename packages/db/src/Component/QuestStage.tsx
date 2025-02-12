import { createRef } from "react";
import { Col, Row } from "react-bootstrap";

import { Ai, Quest, Region } from "@atlasacademy/api-connector";

import AiDescriptor from "../Descriptor/AiDescriptor";
import BgmDescriptor from "../Descriptor/BgmDescriptor";
import { mergeElements } from "../Helper/OutputHelper";
import QuestEnemyTable, { FromToEntry, hashEnemy } from "./QuestEnemy";

const QuestStage = (props: { region: Region; stage: Quest.Stage }) => {
    const stage = props.stage;
    const fieldAiDescriptions = stage.fieldAis.map((ai) => (
        <AiDescriptor region={props.region} aiType={Ai.AiType.FIELD} id={ai.id} />
    ));

    const enemyLookUp = new Map(stage.enemies.map((enemy) => [hashEnemy(enemy), enemy]));

    const enemyRefs = new Map(stage.enemies.map((enemy) => [hashEnemy(enemy), createRef<HTMLDivElement>()]));

    const callEntries: { caller: string; callee: number }[] = [];
    for (const enemy of stage.enemies) {
        if (enemy.enemyScript.call) {
            for (const npcId of enemy.enemyScript.call) {
                callEntries.push({ caller: hashEnemy(enemy), callee: npcId });
            }
        }
    }

    const shiftEntries: FromToEntry[] = [];
    for (const enemy of stage.enemies) {
        if (enemy.enemyScript.shift) {
            enemy.enemyScript.shift.map((npcId, index) =>
                shiftEntries.push({
                    shiftFrom: hashEnemy(enemy),
                    shiftTo: npcId,
                    index,
                })
            );
        }
    }

    const changeEntries: FromToEntry[] = [];
    for (const enemy of stage.enemies) {
        if (enemy.enemyScript.change) {
            enemy.enemyScript.change.map((npcId, index) =>
                changeEntries.push({
                    shiftFrom: hashEnemy(enemy),
                    shiftTo: npcId,
                    index,
                })
            );
        }
    }

    const scrollToEnemy = (enemyHash: string) => {
        let elementRef = enemyRefs.get(enemyHash);
        elementRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div style={{ margin: "1em 0", lineHeight: "3em" }}>
                <b>BGM:</b> <BgmDescriptor region={props.region} bgm={stage.bgm} showLink={true} />
                {stage.fieldAis.length >= 1 ? (
                    <>
                        <br />
                        <b>Field AI:</b> {mergeElements(fieldAiDescriptions, " ")}
                    </>
                ) : null}
                {stage.waveStartMovies.length > 0 ? (
                    <>
                        <br />
                        <b>Movie:</b>
                        <br />
                        <Row>
                            {stage.waveStartMovies.map((movie, index) => (
                                <Col key={index} md={12} lg={6}>
                                    <video controls width="100%">
                                        <source src={movie.waveStartMovie} type="video/mp4" />
                                    </video>
                                </Col>
                            ))}
                        </Row>
                    </>
                ) : null}
            </div>

            {stage.enemies.map((enemy) => (
                <div
                    ref={enemyRefs.get(hashEnemy(enemy))}
                    key={`${enemy.deck}-${enemy.npcId}-${enemy.userSvtId}-${enemy.uniqueId}`}
                >
                    <QuestEnemyTable
                        region={props.region}
                        enemy={enemy}
                        enemyLookUp={enemyLookUp}
                        callEntries={callEntries}
                        shiftEntries={shiftEntries}
                        changeEntries={changeEntries}
                        handleNavigateEnemyHash={scrollToEnemy}
                    />
                </div>
            ))}
        </div>
    );
};

export default QuestStage;
