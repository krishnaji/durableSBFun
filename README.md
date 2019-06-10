# Service Bus with Durable Function
Naming conventions : C - Client Or Starter Function , O - Orchestrator Function , A - Activity Function. 
Please refer [this](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-types-features-overview) link to know more about durable function types.

![Durable Functions](durable-concepts.png)

## C_sbTrigger/Index.js
This function gets triggered whenever is a new message. When this function is run successfully ,it marks the message complete in Service bus. When this function fails it is retried and finally the message is moved to DLQ.

## O_Function/Index.js
This orchestrator function executes the activity functions. Its recommended to  use try-catch while executing activity functions. Also its good idea to implement clean up activity function incase the intended activity function app fails.

## A_Function/Index.js
- Uncomment the the Context.log and comment Throw line to see Durable Function Consuming the message. 
- Comment the the Context.log and uncomment Throw line to see Durable Function failing and moving  the message to DLQ.

``` javascript
module.exports = async function (context) {
    //Comment/Uncomment to test DLQ
    //context.log('@@@@@@@@@@',context.bindings.name);
    throw "Failing the Activity @@@@@@@@@@"; 
};
```
