
    module.exports=function(){
     // extract the data
     let today= new Date();

    //  object for formatting
        let options = {
            weekday: "long",
            day : "numeric",
            month : "long" 
        };

        // method to get date in formatted order based on options object
        return today.toLocaleDateString("en-US",options);

          
}