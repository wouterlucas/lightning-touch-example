import { Lightning, Router } from "@lightningjs/sdk";
import { Logo } from "./Logo";

export class Header extends Lightning.Component<Lightning.Component.TemplateSpecLoose> {
    static override _template(){
        return {
            w: 800, h: 100,
            Logo: {
                type: Logo
            },
            SettingsIcon: {
                x: 730, y: 3,
                type: SettingsIcon
            }
        }
    }

}

class SettingsIcon extends Lightning.Component<Lightning.Component.TemplateSpecLoose> {
    static override _template(){
        return {
            w: 75, h: 75,
            Logo: {
                mount: 0.15,
                src: "./img/settings.png", scale: 0.5
            }

        }
    }

    _onSingleTap() {
        Router.navigate('settings');
    }
}
