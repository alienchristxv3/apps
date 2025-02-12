import React from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { WithTranslation, withTranslation } from "react-i18next";

import { Language } from "@atlasacademy/api-connector";
import { UILanguage } from "@atlasacademy/api-descriptor";

import Manager from "./Manager";
import { Theme } from "./Theme";

interface Event extends React.ChangeEvent<HTMLInputElement> {}

interface IProps extends WithTranslation {
    language: Language;
    theme: Theme;
}

export const UILanguageDescriptor = new Map([
    [UILanguage.EN_US, { langAttribute: "en-US", langName: "English" }],
    [UILanguage.ZH_CN, { langAttribute: "zh-CN", langName: "简体中文" }],
    [UILanguage.ZH_TW, { langAttribute: "zh-TW", langName: "繁體中文" }],
    [UILanguage.KO_KR, { langAttribute: "ko-KR", langName: "한국어" }],
]);

class SettingForm extends React.Component<IProps> {
    updateLanguage(value: string) {
        Manager.setLanguage(value);
    }

    updateTheme(value: string) {
        Manager.setTheme(value);
    }

    updateShopPlannerEnabled(value: boolean) {
        Manager.setShopPlannerEnabled(value);
    }

    updateScriptSceneEnabled(value: boolean) {
        Manager.setScriptSceneEnabled(value);
    }

    updateHideEnemyFunction(value: boolean) {
        Manager.setHideEnemyFunctions(value);
    }

    render() {
        const t = this.props.t;
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>{t("Data Language")}</Form.Label>
                        <Form.Control
                            as={"select"}
                            value={this.props.language}
                            onChange={(ev: Event) => this.updateLanguage(ev.target.value)}
                        >
                            {Object.values(Language).map((v) => (
                                <option key={v} value={v}>
                                    {v}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t("UI Language")}</Form.Label>
                        <Form.Control
                            as={"select"}
                            value={Manager.uiLanguage()}
                            onChange={(ev: Event) => Manager.setUiLanguage(ev.target.value as UILanguage)}
                        >
                            {Object.values(UILanguage).map((v) => (
                                <option key={v} value={v}>
                                    <span lang={UILanguageDescriptor.get(v)?.langAttribute}>
                                        {UILanguageDescriptor.get(v)?.langName}
                                    </span>
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t("Theme")}</Form.Label>
                        <Form.Control
                            as={"select"}
                            value={this.props.theme}
                            onChange={(ev: Event) => this.updateTheme(ev.target.value)}
                        >
                            {Object.values(Theme).map((v) => (
                                <option key={v} value={v}>
                                    {v}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form>
                <ButtonGroup style={{ width: "100%", marginBottom: "1em" }}>
                    <Button
                        variant={Manager.shopPlannerEnabled() ? "success" : "secondary"}
                        onClick={() => this.updateShopPlannerEnabled(!Manager.shopPlannerEnabled())}
                    >
                        {t("Shop planner")}: {Manager.shopPlannerEnabled() ? t("Enabled") : t("Disabled")}
                    </Button>
                </ButtonGroup>
                <ButtonGroup style={{ width: "100%", marginBottom: "1em" }}>
                    <Button
                        variant={Manager.scriptSceneEnabled() ? "success" : "secondary"}
                        onClick={() => this.updateScriptSceneEnabled(!Manager.scriptSceneEnabled())}
                    >
                        {t("Script Scene")}: {Manager.scriptSceneEnabled() ? t("Enabled") : t("Disabled")}
                    </Button>
                </ButtonGroup>
                <ButtonGroup style={{ width: "100%", marginBottom: "1em" }}>
                    <Button
                        variant={Manager.showScriptLine() ? "success" : "secondary"}
                        onClick={() => Manager.setShowScriptLine(!Manager.showScriptLine())}
                    >
                        {t("Original line number in scripts")}: {Manager.showScriptLine() ? t("Shown") : t("Hidden")}
                    </Button>
                </ButtonGroup>
                <ButtonGroup style={{ width: "100%" }}>
                    <Button
                        variant={Manager.hideEnemyFunctions() ? "success" : "secondary"}
                        onClick={() => this.updateHideEnemyFunction(!Manager.hideEnemyFunctions())}
                    >
                        {t("Enemy functions")}: {Manager.hideEnemyFunctions() ? t("Hidden") : t("Shown")}
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default withTranslation()(SettingForm);
