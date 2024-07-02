
const cds = require('@sap/cds');
const axios = require('axios');
const { parseArgs } = require('util');
module.exports = cds.service.impl(async function () {
    let {

        validation

    } = this.entities;

    this.on('READ', validation, async (req,next) => { // sevice name
        debugger
        //==============================without cdsrc.json =====================================================================
        // getcall to get unique name
        // const res1 = await axios.get(("https://b2a369b5trial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/call"), {
        //     headers: {

        //         // authoriztion ex [ username:password ] into base64 
        //         // only autorization in base64
        //         "Authorization": 'Basic c2ItN2JjMzRlMGEtMWM4Yi00ZTI5LWFiZDctNDFhOTMwODU3NDBmIWIyODI2MjB8aXQtcnQtYjJhMzY5YjV0cmlhbCFiMjY2NTU6NDVmZmVmMWUtYmFlNy00NDc3LWEyNzEtNjA0NjM3MGMxODNjJDdXTTFzQVg5WmNBY1ZCNHRaZVROcE5JeDVWOGVBNE9ESktyeDRaQ283YlU9',
        //         "url":'https://openapi.au.cloud.ariba.com/api/sourcing-approval/v2/prod/Task/TSK57960979',
        //         "querey":'realm=PEOLSOLUTIONSDSAPP-T&apikey=3cV1or3pY5COGpayIknlHNvbgxKuSgju'
        //     }

        // }
        // );


        //=================================with cdsrc.json =======================================================================
          // getcall to get unique name

          const ariba = await cds.connect.to('ariba');

          try {

            debugger
            ariba.destination.headers.url = 'https://openapi.au.cloud.ariba.com/api/sourcing-approval/v2/prod/Task/TSK57960979';
            ariba.destination.headers.querey = 'realm=PEOLSOLUTIONSDSAPP-T&apikey=3cV1or3pY5COGpayIknlHNvbgxKuSgju';
           
            var unique_name = await ariba.tx().get('/call');

            let validat = await INSERT.into(validation).entries({

                Pan_no:unique_name.id
          
              });

              return next()


        } catch (e) {
            debugger
            console.log(e)
        }

    })

});


