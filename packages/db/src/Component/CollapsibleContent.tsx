import React, {useContext} from "react";
import {Accordion, AccordionContext, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {Renderable} from "../Helper/OutputHelper";
import "./CollapsibleContent.css";

function ArrowToggle({ eventKey } : { eventKey: string }) {
    const currentKey = useContext(AccordionContext);
    return <FontAwesomeIcon className="collapsible-header-collapse-actions" icon={(currentKey === eventKey) ? faChevronUp : faChevronDown} />
}

function renderCollapsibleContent({ title, content, subheader } : { title: Renderable, content: Renderable, subheader: boolean }) {
    return (
        <Accordion defaultActiveKey={`${title}`}>
            <Card border="light" className="collapsible-card">
                <hr className="collapsible-header-separator" />
                <Accordion.Toggle className="collapsible-header" as="div" eventKey={`${title}`}>
                    {subheader ? <h5 style={{ marginBottom: 0 }}>{title}</h5> : <h3 style={{ marginBottom: 0 }}>{title}</h3>}
                    <span style={{ textAlign: 'right', alignSelf: 'center', marginRight: '1em' }}><ArrowToggle eventKey={`${title}`}/></span>
                </Accordion.Toggle>
                {/* 2 px to align the hr line with the start of content */}
                <Accordion.Collapse eventKey={`${title}`}>
                    <div style={{ marginTop: '2px', marginBottom: '1em' }}>{content}</div>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default renderCollapsibleContent;