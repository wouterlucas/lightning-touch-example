import { Lightning, Router, Utils } from "@lightningjs/sdk";
import { PageType } from "../utils/PageType";

export class NotFound extends Lightning.Component<Lightning.Component.TemplateSpecLoose, PageType> {
    static override _template(){
        return {
            rect: true, w: 1920, h: 1080,
            color: 0xFF402662,
            Header:{
                mount: 0.5, x: 960, y: 540,
                text:{
                    text:'Page not found', fontFace: "Bold", fontSize: 128
                }
            },
            Enter: {
                mountX: 0.5, x: 960, y: 980,
                text: {text: "press [enter] to navigate to Home Page", fontFace: "Regular"}
            }
        }
    }

    override _handleKey(){
        Router.navigate(`home`);
    }
}