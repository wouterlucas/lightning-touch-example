import { Lightning, Router } from "@lightningjs/sdk";

export class BackArrow extends Lightning.Component<Lightning.Component.TemplateSpec> {
    static override _template(){
        return {
            w: 200, h: 100,
            //rect: true, color: 0xFFFFFFF,
            BackArrow: {
                mount: 0.5, x: 50, y: 52,
                src: "./img/back-arrow.png", scale: 0.06,
            },
            Text: {
                mount: 0.5, x: 125, y: 55,
                text: {text: 'Back', fontSize: 25}
            }
        }
    }

    _onSingleTap() {
        Router.navigate('home');
    }
}
