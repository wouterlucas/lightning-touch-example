/**
 * Main application
 */

import { Lightning, Router } from "@lightningjs/sdk";
// @ts-ignore Automotive isn't made TS friendly yet so ignore it for now
import { Automotive } from "@lightningjs/automotive";
import { settings } from "./touchSettings";
import { routes } from './routes';


export class App extends Lightning.Application {
    static getFonts() {
        return [
            // {family: 'Bold', url: Utils.asset('fonts/LondrinaSolid-Regular.ttf'), descriptors: {}},
            // {family: 'Regular', url: Utils.asset('fonts/Fresca-Regular.ttf'), descriptors: {}}
        ];
    }

    override _setup() {
        // start touch engine
        Automotive.start(
            this.application, settings
        );
        Router.startRouter(routes, this);
    }

}
