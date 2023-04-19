import { Lightning, Router } from "@lightningjs/sdk";

export class Logo extends Lightning.Component<Lightning.Component.TemplateSpecLoose> {
    static override _template(){
        return {
            Logo: {
                mount: 0.5,
                alpha: 1,
                x: 35, y: 35,
                src: "./img/logo.png", scale:0.18,
            },
            Text: {
                mount: 0.5, x: 150, y: 35,
                text: {text: "LightningJS", fontSize: 30, textColor: 0xffffffff},
            }
        }
    }

    _onSingleTap() {
        Router.navigate('home');
    }
}
