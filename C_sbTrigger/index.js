const df = require("durable-functions");

module.exports = async function(context, mySbMsg) {
    
    context.log('JavaScript ServiceBus topic trigger function processed message', mySbMsg);
    context.log('MessageId ++++++++', context.bindingData.messageId,' ++++++++');
    const client = df.getClient(context);
    const options ={
        messageId:  context.bindingData.messageId,
        message: mySbMsg
    };
    const instanceId = await client.startNew('O_Function',undefined,options);
    context.log(`+++++++++Started orchestration with ID = '${instanceId}'.`);
    let state= await client.getStatus(instanceId);
    context.log('Init++++++++++++++++++++++',state.runtimeStatus)
    while( state.runtimeStatus !='Completed') {
        state= await client.getStatus(instanceId);
        context.log('Set ++++++++++++++++++++++',state.runtimeStatus)
       if(state.runtimeStatus =='Failed') {
            throw "Orchestration Failed, Failing the Client Function";
     }
            await new Promise(done => setTimeout(done, 2000));
    }
 
     
};