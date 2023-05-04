import { Lightning } from "@lightningjs/sdk";

export class MainLogo extends Lightning.Component<Lightning.Component.TemplateSpecLoose> {

    CanTouchThis = this.getByRef('CanTouchThis')!;
    _textAnimation: any;

    static override _template(){
        return {
            w: 800, h: 600,
            y: 100,
            rect: true, color: 0xFFFFFFF,
            zIndex: 2,
            Logo: {
                mount: 0.5, x: 400, y: 140,
                alpha: 1,
                src: "./img/logo.png", scale: 0.3
            },
            CanTouchThis: {
                alpha: 0,
                mount: 0.5, x: 395, y: 250,
                text: {text: "Can't touch this!", fontSize: 30, textColor: 0xffffffff},
            }
        }
    }

    _onSingleTap() {
        this._textAnimation = this.animation({
            duration: 2, repeat: 0, stopMethod: 'immediate',
            actions: [
                {p: 'CanTouchThis.alpha' as '$$number', v: {0: 0, 0.5: 1, 1: 0}},
            ]
        })

        this._textAnimation.start();
    }

}

