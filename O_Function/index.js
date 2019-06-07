const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    context.log('^^^^^^^^^^',context.bindingData.input);
     
    try {
        //context.df.callSubOrchestratorWithRetry should be used instead of relying on SB triggers retry mechanism.
        yield context.df.callActivity("A_Function", context.bindingData.input);
         
    } catch (error) {
       // yield context.df.callActivity("A_CleanUpFunction", context.bindingData.input);
        throw "Activity Function Failed ^^^^^^^^^^";
    }   
    
});