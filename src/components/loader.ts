import { Lightning } from "@lightningjs/sdk";

const start = {
    Ball1: {
        w: 30, h: 30,
        y: 25,
        mountY: 0.5,
        rect: true,
        color: 0xffdadbde,
        alpha: 1,
        scale: 1,
        shader: {type: Lightning.shaders.RoundedRectangle, radius: 15}
    },
    Ball2: {
        w: 30, h: 30,
        x: 40, y: 25,
        mountY: 0.5,
        rect: true,
        color: 0xff00989e,
        alpha: 1,
        shader: {type: Lightning.shaders.RoundedRectangle, radius: 15}
    },
    Ball3: {
        w: 30, h: 30,
        x: 80, y: 25,
        mountY: 0.5,
        rect: true,
        color: 0xff0e4a87,
        alpha: 1,
        shader: {type: Lightning.shaders.RoundedRectangle, radius: 15}
    }
}

export class Loader extends Lightning.Component<Lightning.Component.TemplateSpecLoose> {

    _isActive: boolean =false;
    _ballIndex: number = 1;

    static override _template(){
        return {
            w: 120, h: 50,
            x:0,y:0,
            //rect: true, color: 0xffffffff,
            ...start
        }
    }

    _reset() {
        this.patch(start)
    }

    override _enable() {
        this._isActive = true;
        this._animateNext();
    }

    override _disable() {
        this._reset();
        this._isActive = false;
    }

    _animateNext() {

        if (!this._isActive) return;


        const tag = 'Ball'+this._ballIndex;

        const ani = this.tag(tag).animation({
            duration: 0.5, repeat: 0, stopMethod: 'immediate',
            actions: [
                {p: 'alpha' as '$$number',     v: {0: 1, 1: 0.75}},
                {p: 'w' as '$$number',     v: {0: 30, 1: 35}},
                {p: 'h' as '$$number',     v: {0: 30, 1: 35}},
            ]
        });

        ani.on('finish', () => {

            const ani2 = this.tag(tag).animation({
                duration: 0.5, repeat: 0, stopMethod: 'immediate',
                actions: [
                    {p: 'alpha' as '$$number',     v: {0: 0.75, 1: 1}},
                    {p: 'w' as '$$number',     v: {0: 35, 1: 30}},
                    {p: 'h' as '$$number',     v: {0: 35, 1: 30}},
                ]
            })


            this._ballIndex++;
            if (this._ballIndex >= 4) this._ballIndex = 1;
            this._animateNext();
            ani2.start();

        });
        ani.start();
    }
}
