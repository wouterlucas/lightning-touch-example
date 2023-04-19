import {Lightning} from "@lightningjs/sdk";

export class Button extends Lightning.Component<Lightning.Component.TemplateSpecLoose> {

    _callback: Function = () => {console.error('tap callback not set')};

    static override _template() {
        return {
            h: 50, w: 200, rect: true,
            color: 0xFF0d6efd,
            Label: {
                mount: 0.5, x: w => w / 2, y: 25, text: {fontSize: 25}
            },
            shader: {type: Lightning.shaders.RoundedRectangle, radius: 10}
        }
    }


    set label(value: any) {
        this.tag('Label').text = value.toString();
    }

    set onTap(callback: Function){
        this._callback = callback;
    }




    /**
     * Will be called when one finger quickly touches this element
     * @private
     */
    _onSingleTap(recording: any) {
        this._callback();
    }
}
