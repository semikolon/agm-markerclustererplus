// @ts-ignore
import { NgZone } from '@angular/core';
import { MarkerManager } from '../../../@agm/core/services/managers/marker-manager';
import { GoogleMapsAPIWrapper } from '../../../@agm/core/services/google-maps-api-wrapper';
import { AgmMarker } from '../../../@agm/core/directives/marker';
import { AgmMarkerCluster } from './../../directives/marker-cluster';
import MarkerClusterer from '@google/markerclustererplus';
import { ClusterOptions } from '../google-clusterer-types';
export declare class ClusterManager extends MarkerManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    protected _zone: NgZone;
    private _clustererInstance;
    private _resolver;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    init(options: ClusterOptions): void;
    addMarker(marker: AgmMarker): void;
    deleteMarker(marker: AgmMarker): Promise<void>;
    clearMarkers(): Promise<void>;
    setGridSize(c: AgmMarkerCluster): void;
    setMaxZoom(c: AgmMarkerCluster): void;
    setStyles(c: AgmMarkerCluster): void;
    setZoomOnClick(c: AgmMarkerCluster): void;
    setAverageCenter(c: AgmMarkerCluster): void;
    setEnableRetinaIcons?(c: AgmMarkerCluster): void;
    setCalculator?(c: AgmMarkerCluster): void;
    setImagePath(c: AgmMarkerCluster): void;
    setMinimumClusterSize(c: AgmMarkerCluster): void;
    setImageExtension(c: AgmMarkerCluster): void;
}
