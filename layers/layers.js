var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BUFFER002_1 = new ol.format.GeoJSON();
var features_BUFFER002_1 = format_BUFFER002_1.readFeatures(json_BUFFER002_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER002_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER002_1.addFeatures(features_BUFFER002_1);
var lyr_BUFFER002_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER002_1, 
                style: style_BUFFER002_1,
                popuplayertitle: 'BUFFER002',
                interactive: true,
                title: '<img src="styles/legend/BUFFER002_1.png" /> BUFFER002'
            });
var format_srmaproad1kmz_2 = new ol.format.GeoJSON();
var features_srmaproad1kmz_2 = format_srmaproad1kmz_2.readFeatures(json_srmaproad1kmz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmaproad1kmz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmaproad1kmz_2.addFeatures(features_srmaproad1kmz_2);
var lyr_srmaproad1kmz_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srmaproad1kmz_2, 
                style: style_srmaproad1kmz_2,
                popuplayertitle: 'srmaproad-1.kmz',
                interactive: true,
                title: 'srmaproad-1.kmz'
            });
var format_BUFFER001_3 = new ol.format.GeoJSON();
var features_BUFFER001_3 = format_BUFFER001_3.readFeatures(json_BUFFER001_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER001_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER001_3.addFeatures(features_BUFFER001_3);
var lyr_BUFFER001_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER001_3, 
                style: style_BUFFER001_3,
                popuplayertitle: 'BUFFER001',
                interactive: true,
                title: '<img src="styles/legend/BUFFER001_3.png" /> BUFFER001'
            });
var format_Intersection_4 = new ol.format.GeoJSON();
var features_Intersection_4 = format_Intersection_4.readFeatures(json_Intersection_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_4.addFeatures(features_Intersection_4);
var lyr_Intersection_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_4, 
                style: style_Intersection_4,
                popuplayertitle: 'Intersection',
                interactive: true,
                title: '<img src="styles/legend/Intersection_4.png" /> Intersection'
            });
var format_INTERSECTION01_5 = new ol.format.GeoJSON();
var features_INTERSECTION01_5 = format_INTERSECTION01_5.readFeatures(json_INTERSECTION01_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTERSECTION01_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTERSECTION01_5.addFeatures(features_INTERSECTION01_5);
var lyr_INTERSECTION01_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTERSECTION01_5, 
                style: style_INTERSECTION01_5,
                popuplayertitle: 'INTERSECTION01',
                interactive: true,
                title: '<img src="styles/legend/INTERSECTION01_5.png" /> INTERSECTION01'
            });
var format_JNTUH1_6 = new ol.format.GeoJSON();
var features_JNTUH1_6 = format_JNTUH1_6.readFeatures(json_JNTUH1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JNTUH1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JNTUH1_6.addFeatures(features_JNTUH1_6);
var lyr_JNTUH1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JNTUH1_6, 
                style: style_JNTUH1_6,
                popuplayertitle: 'JNTUH1',
                interactive: true,
                title: '<img src="styles/legend/JNTUH1_6.png" /> JNTUH1'
            });
var format_NHS_7 = new ol.format.GeoJSON();
var features_NHS_7 = format_NHS_7.readFeatures(json_NHS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHS_7.addFeatures(features_NHS_7);
var lyr_NHS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHS_7, 
                style: style_NHS_7,
                popuplayertitle: 'NHS',
                interactive: true,
                title: '<img src="styles/legend/NHS_7.png" /> NHS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BUFFER002_1.setVisible(true);lyr_srmaproad1kmz_2.setVisible(true);lyr_BUFFER001_3.setVisible(true);lyr_Intersection_4.setVisible(true);lyr_INTERSECTION01_5.setVisible(true);lyr_JNTUH1_6.setVisible(true);lyr_NHS_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BUFFER002_1,lyr_srmaproad1kmz_2,lyr_BUFFER001_3,lyr_Intersection_4,lyr_INTERSECTION01_5,lyr_JNTUH1_6,lyr_NHS_7];
lyr_BUFFER002_1.set('fieldAliases', {'Collge': 'Collge', 'Strength': 'Strength', 'Phoneno': 'Phoneno', 'Floors': 'Floors', });
lyr_srmaproad1kmz_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BUFFER001_3.set('fieldAliases', {'JNTUH': 'JNTUH', 'Phone no': 'Phone no', 'floors': 'floors', 'Strength': 'Strength', });
lyr_Intersection_4.set('fieldAliases', {'JNTUH': 'JNTUH', 'Phone no': 'Phone no', 'floors': 'floors', 'Strength': 'Strength', 'Collge': 'Collge', 'Strength_2': 'Strength_2', 'Phoneno': 'Phoneno', 'Floors_2': 'Floors_2', });
lyr_INTERSECTION01_5.set('fieldAliases', {'JNTUH': 'JNTUH', 'Phone no': 'Phone no', 'floors': 'floors', 'Strength': 'Strength', 'Collge': 'Collge', 'Strength_2': 'Strength_2', 'Phoneno': 'Phoneno', 'Floors_2': 'Floors_2', });
lyr_JNTUH1_6.set('fieldAliases', {'JNTUH': 'JNTUH', 'Phone no': 'Phone no', 'floors': 'floors', 'Strength': 'Strength', });
lyr_NHS_7.set('fieldAliases', {'School': 'School', 'Phone no': 'Phone no', 'Strength': 'Strength', 'floor': 'floor', });
lyr_BUFFER002_1.set('fieldImages', {'Collge': '', 'Strength': '', 'Phoneno': '', 'Floors': '', });
lyr_srmaproad1kmz_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BUFFER001_3.set('fieldImages', {'JNTUH': '', 'Phone no': '', 'floors': '', 'Strength': '', });
lyr_Intersection_4.set('fieldImages', {'JNTUH': '', 'Phone no': '', 'floors': '', 'Strength': '', 'Collge': '', 'Strength_2': '', 'Phoneno': '', 'Floors_2': '', });
lyr_INTERSECTION01_5.set('fieldImages', {'JNTUH': '', 'Phone no': '', 'floors': '', 'Strength': '', 'Collge': '', 'Strength_2': '', 'Phoneno': '', 'Floors_2': '', });
lyr_JNTUH1_6.set('fieldImages', {'JNTUH': '', 'Phone no': '', 'floors': '', 'Strength': '', });
lyr_NHS_7.set('fieldImages', {'School': '', 'Phone no': '', 'Strength': '', 'floor': '', });
lyr_BUFFER002_1.set('fieldLabels', {'Collge': 'inline label - always visible', 'Strength': 'inline label - always visible', 'Phoneno': 'inline label - always visible', 'Floors': 'inline label - always visible', });
lyr_srmaproad1kmz_2.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', });
lyr_BUFFER001_3.set('fieldLabels', {'JNTUH': 'inline label - always visible', 'Phone no': 'inline label - always visible', 'floors': 'inline label - always visible', 'Strength': 'inline label - always visible', });
lyr_Intersection_4.set('fieldLabels', {'JNTUH': 'inline label - always visible', 'Phone no': 'inline label - always visible', 'floors': 'inline label - always visible', 'Strength': 'inline label - always visible', 'Collge': 'inline label - always visible', 'Strength_2': 'inline label - always visible', 'Phoneno': 'inline label - always visible', 'Floors_2': 'inline label - always visible', });
lyr_INTERSECTION01_5.set('fieldLabels', {'JNTUH': 'inline label - always visible', 'Phone no': 'inline label - always visible', 'floors': 'inline label - always visible', 'Strength': 'inline label - always visible', 'Collge': 'inline label - always visible', 'Strength_2': 'inline label - always visible', 'Phoneno': 'inline label - always visible', 'Floors_2': 'inline label - always visible', });
lyr_JNTUH1_6.set('fieldLabels', {'JNTUH': 'inline label - always visible', 'Phone no': 'inline label - always visible', 'floors': 'inline label - always visible', 'Strength': 'inline label - always visible', });
lyr_NHS_7.set('fieldLabels', {'School': 'header label - visible with data', 'Phone no': 'header label - visible with data', 'Strength': 'inline label - always visible', 'floor': 'inline label - always visible', });
lyr_NHS_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});