//@ui5-bundle panvalid/Component-preload.js
sap.ui.require.preload({
	"panvalid/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("panvalid.Component",{metadata:{manifest:"json"}})});
},
	"panvalid/i18n/i18n.properties":'# This is the resource bundle for panvalid\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=pan\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,30\nflpTitle=validation\n',
	"panvalid/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"panvalid","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.0","toolsId":"a93f39e0-6170-4a80-9388-c5ad77a2776b"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"validation-display":{"semanticObject":"validation","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.125.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"panvalid.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"validationList","target":"validationList"},{"pattern":"validation({key}):?query:","name":"validationObjectPage","target":"validationObjectPage"}],"targets":{"validationList":{"type":"Component","id":"validationList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/validation","variantManagement":"Page","navigation":{"validation":{"detail":{"route":"validationObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"validationObjectPage":{"type":"Component","id":"validationObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/validation"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"aribaapp"}}'
});
//# sourceMappingURL=Component-preload.js.map
