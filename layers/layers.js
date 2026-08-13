ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10371663.256407, 5542177.667494, -10370143.898167, 5543181.251771]);
var wms_layers = [];


        var lyr_googlemap_0 = new ol.layer.Tile({
            'title': 'google map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_farmland_1 = new ol.format.GeoJSON();
var features_farmland_1 = format_farmland_1.readFeatures(json_farmland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farmland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farmland_1.addFeatures(features_farmland_1);
var lyr_farmland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_farmland_1, 
                style: style_farmland_1,
                popuplayertitle: 'farmland',
                interactive: false,
                title: '<img src="styles/legend/farmland_1.png" /> farmland'
            });
var format_livestockandhay_2 = new ol.format.GeoJSON();
var features_livestockandhay_2 = format_livestockandhay_2.readFeatures(json_livestockandhay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_livestockandhay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_livestockandhay_2.addFeatures(features_livestockandhay_2);
var lyr_livestockandhay_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_livestockandhay_2, 
                style: style_livestockandhay_2,
                popuplayertitle: 'livestock and hay',
                interactive: false,
                title: '<img src="styles/legend/livestockandhay_2.png" /> livestock and hay'
            });
var format_conservationeasement_3 = new ol.format.GeoJSON();
var features_conservationeasement_3 = format_conservationeasement_3.readFeatures(json_conservationeasement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_conservationeasement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_conservationeasement_3.addFeatures(features_conservationeasement_3);
var lyr_conservationeasement_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_conservationeasement_3, 
                style: style_conservationeasement_3,
                popuplayertitle: 'conservation easement',
                interactive: false,
                title: '<img src="styles/legend/conservationeasement_3.png" /> conservation easement'
            });
var format_outline_4 = new ol.format.GeoJSON();
var features_outline_4 = format_outline_4.readFeatures(json_outline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_outline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_outline_4.addFeatures(features_outline_4);
var lyr_outline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_outline_4, 
                style: style_outline_4,
                popuplayertitle: 'outline',
                interactive: false,
                title: '<img src="styles/legend/outline_4.png" /> outline'
            });
var format_walkingpath_5 = new ol.format.GeoJSON();
var features_walkingpath_5 = format_walkingpath_5.readFeatures(json_walkingpath_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_walkingpath_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_walkingpath_5.addFeatures(features_walkingpath_5);
var lyr_walkingpath_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_walkingpath_5, 
                style: style_walkingpath_5,
                popuplayertitle: 'walking path',
                interactive: false,
                title: '<img src="styles/legend/walkingpath_5.png" /> walking path'
            });
var format_walkingtour_6 = new ol.format.GeoJSON();
var features_walkingtour_6 = format_walkingtour_6.readFeatures(json_walkingtour_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_walkingtour_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_walkingtour_6.addFeatures(features_walkingtour_6);
var lyr_walkingtour_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_walkingtour_6, 
                style: style_walkingtour_6,
                popuplayertitle: 'walking tour',
                interactive: true,
                title: '<img src="styles/legend/walkingtour_6.png" /> walking tour'
            });

lyr_googlemap_0.setVisible(true);lyr_farmland_1.setVisible(true);lyr_livestockandhay_2.setVisible(true);lyr_conservationeasement_3.setVisible(true);lyr_outline_4.setVisible(true);lyr_walkingpath_5.setVisible(true);lyr_walkingtour_6.setVisible(true);
var layersList = [lyr_googlemap_0,lyr_farmland_1,lyr_livestockandhay_2,lyr_conservationeasement_3,lyr_outline_4,lyr_walkingpath_5,lyr_walkingtour_6];
lyr_farmland_1.set('fieldAliases', {'id': 'id', });
lyr_livestockandhay_2.set('fieldAliases', {'id': 'id', });
lyr_conservationeasement_3.set('fieldAliases', {'id': 'id', });
lyr_outline_4.set('fieldAliases', {'id': 'id', });
lyr_walkingpath_5.set('fieldAliases', {'id': 'id', });
lyr_walkingtour_6.set('fieldAliases', {'id': 'id', 'stop num': 'stop num', });
lyr_farmland_1.set('fieldImages', {'id': 'TextEdit', });
lyr_livestockandhay_2.set('fieldImages', {'id': 'TextEdit', });
lyr_conservationeasement_3.set('fieldImages', {'id': 'TextEdit', });
lyr_outline_4.set('fieldImages', {'id': 'TextEdit', });
lyr_walkingpath_5.set('fieldImages', {'id': 'TextEdit', });
lyr_walkingtour_6.set('fieldImages', {'id': 'TextEdit', 'stop num': 'TextEdit', });
lyr_farmland_1.set('fieldLabels', {'id': 'no label', });
lyr_livestockandhay_2.set('fieldLabels', {'id': 'no label', });
lyr_conservationeasement_3.set('fieldLabels', {'id': 'no label', });
lyr_outline_4.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_walkingpath_5.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_walkingtour_6.set('fieldLabels', {'id': 'hidden field', 'stop num': 'no label', });
lyr_walkingtour_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});