import { Directive, Input } from '@angular/core';
import { ClusterManager } from '../services/managers/cluster-manager';
import { MarkerManager, InfoWindowManager } from '@agm/core';
/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarkerCluster = /** @class */ (function () {
    function AgmMarkerCluster(_clusterManager) {
        this._clusterManager = _clusterManager;
    }
    /** @internal */
    /** @internal */
    AgmMarkerCluster.prototype.ngOnDestroy = /** @internal */
    function () {
        this._clusterManager.clearMarkers();
    };
    /** @internal */
    /** @internal */
    AgmMarkerCluster.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['enableRetinaIcons']) {
            this._clusterManager.setEnableRetinaIcons(this);
        }
        if (changes['calculator']) {
            this._clusterManager.setCalculator(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
    };
    /** @internal */
    /** @internal */
    AgmMarkerCluster.prototype.ngOnInit = /** @internal */
    function () {
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            enableRetinaIcons: this.enableRetinaIcons,
            calculator: this.calculator,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension,
        });
    };
    AgmMarkerCluster.decorators = [
        { type: Directive, args: [{
                    selector: 'agm-marker-cluster',
                    providers: [
                        ClusterManager,
                        { provide: MarkerManager, useExisting: ClusterManager },
                        InfoWindowManager,
                    ]
                },] },
    ];
    /** @nocollapse */
    AgmMarkerCluster.ctorParameters = function () { return [
        { type: ClusterManager, },
    ]; };
    AgmMarkerCluster.propDecorators = {
        "gridSize": [{ type: Input },],
        "maxZoom": [{ type: Input },],
        "zoomOnClick": [{ type: Input },],
        "averageCenter": [{ type: Input },],
        "enableRetinaIcons": [{ type: Input },],
        "calculator": [{ type: Input },],
        "minimumClusterSize": [{ type: Input },],
        "styles": [{ type: Input },],
        "imagePath": [{ type: Input },],
        "imageExtension": [{ type: Input },],
    };
    return AgmMarkerCluster;
}());
export { AgmMarkerCluster };
//# sourceMappingURL=marker-cluster.js.map