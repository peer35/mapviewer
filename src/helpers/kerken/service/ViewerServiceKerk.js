import ViewerService from "../../service/ViewerService";
import ViewerLayerKerk from '../layer/ViewerLayerKerk'
import {ALLOWED_VIEWER_CRS} from "@/shared"

class ViewerServiceKerk extends ViewerService {
    constructor(props) {
        super(props);
        this.kerk_options = props.kerk_options;
    }

    async getCapabilities() {
        const layers = [];
        const extent = [
            -1.86027801047121,
            49.854107444730744,
            12.20222198952879,
            54.35672339723146
        ]; // Nederland
        // add kapittels and uithoven later?
        layers.push(new ViewerLayerKerk({
            name: 'kerken',
            extent_lonlat: extent,
            title: 'kerken',
            available_crs: ALLOWED_VIEWER_CRS,
        }));
        // one layer per style? e.g. 6 layers or 1 layer and reset the style function?
        // anyways I need the colors in the legend and on the map, so need a helper function
        return layers;
    }

    setLayers(layers) {
        this.layers = [];
        for (const l of layers) {
            this.layers.push(new ViewerLayerKerk(l));
        }
    }


}

export default ViewerServiceKerk;
