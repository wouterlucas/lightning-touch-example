import { Lightning, Router } from "@lightningjs/sdk";
import { PageType } from "../utils/PageType";
import {Header, MainLogo } from "../components";

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
                type: MainLogo
            }
        }
    }


    override _init() {
        console.log('init home');
    }


}
