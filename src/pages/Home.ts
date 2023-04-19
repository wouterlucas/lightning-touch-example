import { Lightning, Router } from "@lightningjs/sdk";
import { PageType } from "../utils/PageType";
import {Header, Loader} from "../components";

export class Home extends Lightning.Component<Lightning.Component.TemplateSpecLoose, PageType> {
    static override _template(){
        return {
            Background: {
                x: 0, y: 0, w: 800, h: 480,
                src: "./img/background.png",
            },
            Header:{
                type: Header
            },
            Logo: {
                mount: 0.5, x: 400, y: 240,
                alpha: 1,
                src: "./img/logo.png", scale: 0.3
            }
        }
    }


    override _init() {
        console.log('init home');

    }
}
