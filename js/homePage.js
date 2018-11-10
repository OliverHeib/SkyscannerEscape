var apiRef = "http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0";
$(document).ready(function(){
    $("body").load("../insertUpper.html");
    $("body").load("../insertLower.html");
});
$("#flightSubmit").click(function(){
    //doing algorithm
    var apiKey = "ha16291181876822";
    var country, currency, locale, origin, userdestination, outboundPartialDate;
    $.get(apiRef+"/"+country+"/"+currency+"/"+locale+"/"+origin+"/"+userdestination+"/"+outboundPartialDate+"?apikey="+apiKey);
});