sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'panvalid/test/integration/FirstJourney',
		'panvalid/test/integration/pages/validationList',
		'panvalid/test/integration/pages/validationObjectPage'
    ],
    function(JourneyRunner, opaJourney, validationList, validationObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('panvalid') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThevalidationList: validationList,
					onThevalidationObjectPage: validationObjectPage
                }
            },
            opaJourney.run
        );
    }
);