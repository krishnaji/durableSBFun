module.exports = async function (context) {
    //Comment/Uncomment to test DLQ
    //context.log('@@@@@@@@@@',context.bindings.name);
    throw "Failing the Activity @@@@@@@@@@"; 
};