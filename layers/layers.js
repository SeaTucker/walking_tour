ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10372236.126891, 5541778.358960, -10368745.806239, 5543944.641819]);
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
var format_tillableland_1 = new ol.format.GeoJSON();
var features_tillableland_1 = format_tillableland_1.readFeatures(json_tillableland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tillableland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tillableland_1.addFeatures(features_tillableland_1);
var lyr_tillableland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tillableland_1, 
                style: style_tillableland_1,
                popuplayertitle: 'tillable land',
                interactive: false,
                title: '<img src="styles/legend/tillableland_1.png" /> tillable land'
            });
var format_pasturehay_2 = new ol.format.GeoJSON();
var features_pasturehay_2 = format_pasturehay_2.readFeatures(json_pasturehay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasturehay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasturehay_2.addFeatures(features_pasturehay_2);
var lyr_pasturehay_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasturehay_2, 
                style: style_pasturehay_2,
                popuplayertitle: 'pasture/hay',
                interactive: false,
                title: '<img src="styles/legend/pasturehay_2.png" /> pasture/hay'
            });
var format_habitatwetland_3 = new ol.format.GeoJSON();
var features_habitatwetland_3 = format_habitatwetland_3.readFeatures(json_habitatwetland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_habitatwetland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_habitatwetland_3.addFeatures(features_habitatwetland_3);
var lyr_habitatwetland_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_habitatwetland_3, 
                style: style_habitatwetland_3,
                popuplayertitle: 'habitat/wetland',
                interactive: false,
                title: '<img src="styles/legend/habitatwetland_3.png" /> habitat/wetland'
            });
var format_buildingsimplements_4 = new ol.format.GeoJSON();
var features_buildingsimplements_4 = format_buildingsimplements_4.readFeatures(json_buildingsimplements_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildingsimplements_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildingsimplements_4.addFeatures(features_buildingsimplements_4);
var lyr_buildingsimplements_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildingsimplements_4, 
                style: style_buildingsimplements_4,
                popuplayertitle: 'buildings/implements',
                interactive: true,
                title: '<img src="styles/legend/buildingsimplements_4.png" /> buildings/implements'
            });
var format_outline_5 = new ol.format.GeoJSON();
var features_outline_5 = format_outline_5.readFeatures(json_outline_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_outline_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_outline_5.addFeatures(features_outline_5);
var lyr_outline_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_outline_5, 
                style: style_outline_5,
                popuplayertitle: 'outline',
                interactive: false,
                title: '<img src="styles/legend/outline_5.png" /> outline'
            });
var format_walkingpath_6 = new ol.format.GeoJSON();
var features_walkingpath_6 = format_walkingpath_6.readFeatures(json_walkingpath_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_walkingpath_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_walkingpath_6.addFeatures(features_walkingpath_6);
var lyr_walkingpath_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_walkingpath_6, 
                style: style_walkingpath_6,
                popuplayertitle: 'walking path',
                interactive: false,
                title: '<img src="styles/legend/walkingpath_6.png" /> walking path'
            });
var format_walkingtour_7 = new ol.format.GeoJSON();
var features_walkingtour_7 = format_walkingtour_7.readFeatures(json_walkingtour_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_walkingtour_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_walkingtour_7.addFeatures(features_walkingtour_7);
var lyr_walkingtour_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_walkingtour_7, 
                style: style_walkingtour_7,
                popuplayertitle: 'walking tour',
                interactive: true,
                title: '<img src="styles/legend/walkingtour_7.png" /> walking tour'
            });

lyr_googlemap_0.setVisible(true);lyr_tillableland_1.setVisible(true);lyr_pasturehay_2.setVisible(true);lyr_habitatwetland_3.setVisible(true);lyr_buildingsimplements_4.setVisible(true);lyr_outline_5.setVisible(true);lyr_walkingpath_6.setVisible(true);lyr_walkingtour_7.setVisible(true);
var layersList = [lyr_googlemap_0,lyr_tillableland_1,lyr_pasturehay_2,lyr_habitatwetland_3,lyr_buildingsimplements_4,lyr_outline_5,lyr_walkingpath_6,lyr_walkingtour_7];
lyr_tillableland_1.set('fieldAliases', {'id': 'id', });
lyr_pasturehay_2.set('fieldAliases', {'id': 'id', });
lyr_habitatwetland_3.set('fieldAliases', {'id': 'id', });
lyr_buildingsimplements_4.set('fieldAliases', {'id': 'id', });
lyr_outline_5.set('fieldAliases', {'id': 'id', });
lyr_walkingpath_6.set('fieldAliases', {'id': 'id', });
lyr_walkingtour_7.set('fieldAliases', {'id': 'id', 'stop num': 'stop num', });
lyr_tillableland_1.set('fieldImages', {'id': 'TextEdit', });
lyr_pasturehay_2.set('fieldImages', {'id': 'TextEdit', });
lyr_habitatwetland_3.set('fieldImages', {'id': 'TextEdit', });
lyr_buildingsimplements_4.set('fieldImages', {'id': 'TextEdit', });
lyr_outline_5.set('fieldImages', {'id': 'TextEdit', });
lyr_walkingpath_6.set('fieldImages', {'id': 'TextEdit', });
lyr_walkingtour_7.set('fieldImages', {'id': 'TextEdit', 'stop num': 'TextEdit', });
lyr_tillableland_1.set('fieldLabels', {'id': 'no label', });
lyr_pasturehay_2.set('fieldLabels', {'id': 'no label', });
lyr_habitatwetland_3.set('fieldLabels', {'id': 'no label', });
lyr_buildingsimplements_4.set('fieldLabels', {'id': 'no label', });
lyr_outline_5.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_walkingpath_6.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_walkingtour_7.set('fieldLabels', {'id': 'hidden field', 'stop num': 'no label', });
lyr_walkingtour_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});