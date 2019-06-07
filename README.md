# Service Bus with Durable Function
## A_Function/Index.js
Uncomment the the Context.log and comment Throw line to see Durable Function Consuming the message.
Comment the the Context.log and uncomment Throw line to see Durable Function failing and moving  the message to DLQ.

``` javascript
module.exports = async function (context) {
    //Comment/Uncomment to test DLQ
    //context.log('@@@@@@@@@@',context.bindings.name);
    throw "Failing the Activity @@@@@@@@@@"; 
};
```