var wms_layers = [];

var format_CONFINI_MAPPA_0 = new ol.format.GeoJSON();
var features_CONFINI_MAPPA_0 = format_CONFINI_MAPPA_0.readFeatures(json_CONFINI_MAPPA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONFINI_MAPPA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONFINI_MAPPA_0.addFeatures(features_CONFINI_MAPPA_0);
var lyr_CONFINI_MAPPA_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONFINI_MAPPA_0, 
                style: style_CONFINI_MAPPA_0,
                popuplayertitle: 'CONFINI_MAPPA',
                interactive: true,
                title: '<img src="styles/legend/CONFINI_MAPPA_0.png" /> CONFINI_MAPPA'
            });
var format_CONFINI_COMUNI_1 = new ol.format.GeoJSON();
var features_CONFINI_COMUNI_1 = format_CONFINI_COMUNI_1.readFeatures(json_CONFINI_COMUNI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONFINI_COMUNI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONFINI_COMUNI_1.addFeatures(features_CONFINI_COMUNI_1);
var lyr_CONFINI_COMUNI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONFINI_COMUNI_1, 
                style: style_CONFINI_COMUNI_1,
                popuplayertitle: 'CONFINI_COMUNI',
                interactive: true,
                title: '<img src="styles/legend/CONFINI_COMUNI_1.png" /> CONFINI_COMUNI'
            });
var format_confine_MT_2 = new ol.format.GeoJSON();
var features_confine_MT_2 = format_confine_MT_2.readFeatures(json_confine_MT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_confine_MT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_confine_MT_2.addFeatures(features_confine_MT_2);
var lyr_confine_MT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_confine_MT_2, 
                style: style_confine_MT_2,
                popuplayertitle: 'confine_MT',
                interactive: true,
                title: '<img src="styles/legend/confine_MT_2.png" /> confine_MT'
            });
var group_A017_ACCETTURA_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'A017_ACCETTURA_ple'});
var group_A196_ALIANO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'A196_ALIANO_ple'});
var group_A801_BERNALDA_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'A801_BERNALDA_ple'});
var group_A942_NOVASIRI_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'A942_NOVA SIRI_ple'});
var group_B391_CALCIANO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'B391_CALCIANO_ple'});
var group_C723_CIRIGLIANO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'C723_CIRIGLIANO_ple'});
var group_C888_COLOBRARO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'C888_COLOBRARO_ple'});
var group_D128_CRACO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'D128_CRACO_ple'});
var group_D513_VALSINNI_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'D513_VALSINNI_ple'});
var group_D547_FERRANDINA_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'D547_FERRANDINA_ple'});
var group_D909_GARAGUSO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'D909_GARAGUSO_ple'});
var group_E093_GORGOGLIONE_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'E093_GORGOGLIONE_ple'});
var group_E147_GRASSANO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'E147_GRASSANO_ple'});
var group_E213_GROTTOLE_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'E213_GROTTOLE_ple'});
var group_E326_IRSINA_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'E326_IRSINA_ple'});
var group_F052_MATERA_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'F052_MATERA_ple'});
var group_F201_MIGLIONICO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'F201_MIGLIONICO_ple'});
var group_F399_MONTALBANOIONICO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'F399_MONTALBANO IONICO_ple'});
var group_F637_MONTESCAGLIOSO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'F637_MONTESCAGLIOSO_ple'});
var group_G037_OLIVETOLUCANO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'G037_OLIVETO LUCANO_ple'});
var group_G712_PISTICCI_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'G712_PISTICCI_ple'});
var group_G786_POLICORO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'G786_POLICORO_ple'});
var group_G806_POMARICO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'G806_POMARICO_ple'});
var group_H591_ROTONDELLA_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'H591_ROTONDELLA_ple'});
var group_H687_SALANDRA_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'H687_SALANDRA_ple'});
var group_H888_SANGIORGIOLUCANO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'H888_SAN GIORGIO LUCANO_ple'});
var group_I029_SANMAUROFORTE_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'I029_SAN MAURO FORTE_ple'});
var group_I954_STIGLIANO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'I954_STIGLIANO_ple'});
var group_L477_TURSI_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'L477_TURSI_ple'});
var group_L418_TRICARICO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'L418_TRICARICO_ple'});
var group_M256_SCANZANOIONICO_ple = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'M256_SCANZANO IONICO_ple'});
var group_PLLESHP = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PLLE SHP'});

lyr_CONFINI_MAPPA_0.setVisible(true);lyr_CONFINI_COMUNI_1.setVisible(true);lyr_confine_MT_2.setVisible(true);
var layersList = [lyr_CONFINI_MAPPA_0,lyr_CONFINI_COMUNI_1,lyr_confine_MT_2];
lyr_CONFINI_MAPPA_0.set('fieldAliases', {'LABEL': 'LABEL', 'NATIONALCA': 'NATIONALCA', 'ADMINISTRA': 'ADMINISTRA', 'layer': 'layer', });
lyr_CONFINI_COMUNI_1.set('fieldAliases', {'LABEL': 'LABEL', 'NATIONALCA': 'NATIONALCA', 'ADMINISTRA': 'ADMINISTRA', 'layer': 'layer', 'area': 'area', });
lyr_confine_MT_2.set('fieldAliases', {'LABEL': 'LABEL', });
lyr_CONFINI_MAPPA_0.set('fieldImages', {'LABEL': 'TextEdit', 'NATIONALCA': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'layer': 'TextEdit', });
lyr_CONFINI_COMUNI_1.set('fieldImages', {'LABEL': 'TextEdit', 'NATIONALCA': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'layer': 'TextEdit', 'area': 'TextEdit', });
lyr_confine_MT_2.set('fieldImages', {'LABEL': 'TextEdit', });
lyr_CONFINI_MAPPA_0.set('fieldLabels', {'LABEL': 'no label', 'NATIONALCA': 'no label', 'ADMINISTRA': 'no label', 'layer': 'no label', });
lyr_CONFINI_COMUNI_1.set('fieldLabels', {'LABEL': 'no label', 'NATIONALCA': 'no label', 'ADMINISTRA': 'inline label - always visible', 'layer': 'no label', 'area': 'no label', });
lyr_confine_MT_2.set('fieldLabels', {'LABEL': 'no label', });
lyr_confine_MT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});