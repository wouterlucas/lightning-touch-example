import { Lightning } from "@lightningjs/sdk";
import { PageType } from "../utils/PageType";
import {Header, Button, BackArrow} from "../components";

export class Settings extends Lightning.Component<Lightning.Component.TemplateSpecLoose, PageType> {
    static override _template(){
        return {
            Header:{
                type: Header
            },
            BackArrow: {
                y: 45,
                type: BackArrow,
            },
            InfoText: {mountX: 0.5,x: 400, y:80, text: {text: 'Settings', fontSize: 30}},
            Settings: {
                x: 100, y: 180
            }
        }
    }

    override _enable() {
        const settings = {};
        const keys = Object.keys(settings);

    }


}
