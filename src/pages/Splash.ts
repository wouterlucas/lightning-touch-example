import { Lightning, Router, Utils } from "@lightningjs/sdk";
import { PageType } from "../utils/PageType";

export interface SplashTemplateSpec extends Lightning.Component.TemplateSpec {
    Logo: object;
}


export class Splash extends Lightning.Component<SplashTemplateSpec, PageType> {

    Logo = this.getByRef('Logo')!;
    _logoAnimation: any;
    _logoScaleDownToHeader: any;

    static override _template(){
        return {
            rect: true, w: 800, h: 480,
            color: 0XFF000000,
            Logo: {
                mount: 0.5, x: 400, y: 240,
                alpha: 0,
                src: "./img/logo.png", scale: 0.3
            }
        }
    }

    override _init(){
        this._logoAnimation = this.animation({
            duration: 3, repeat: 0, stopMethod: 'immediate',
            actions: [
                {p: 'Logo.alpha' as '$$number', v: {0: 0, 0.5: 0.5, 1: 1}},
            ]
        })

        this._logoScaleDownToHeader = this.animation({
            duration: 1.5, repeat: 0, stopMethod: 'immediate',
            actions: [
                {p: 'Logo.scale' as '$$number', v: {0: 0.3, 1: 0.15}},
                {p: 'Logo.x' as '$$number',     v: {0: 400, 1: 95}},
                {p: 'Logo.y' as '$$number',     v: {0: 240, 1: 30}},
            ]
        });

        this._logoAnimation.start();
        this._logoAnimation.on('finish', () => {
            this._logoScaleDownToHeader.start();
        });

        this._logoScaleDownToHeader.on('finish', () => {
            Router.navigate("home");
        });
    }


}