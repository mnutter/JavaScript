function isEmpty(s) {
    if (s == null || s.length == 0)
        return true;

    // The test returns true if there is at least one non-
    // whitespace, meaning the string is not empty. If the
    // test returns true, the string is empty.
    return !/\S/.test(s);
}

function looksLikeEmail(field) {
    var _s = field.value;

    if (isEmpty(_s))
    {
        return false;
    }

    if (/[^@]+@\w+/.test(_s))
        return true;

    return false;
}

function isInteger(field) {
    var _s = field.value;
    if (isEmpty(_s))    {
        return false;
    }

    if (!(/^-?\d+$/.test(_s))) {
        return false;
    }
    return true;
}
function isStateCode(s){
    //Validate against the list of U.S. Postal Codes for states, territories and armed forces

    var _delimeter = "|";
    var _USStateCodes = "AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|" +
                        "NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY|AE|AA|AE|AE|AP"

    if (isStateCode.arguments.length == 1){
        if (typeof(s) == 'string'){
            if (isEmpty(s)){
                return false;
            }
            if (s.length !=2){
                return false;
            }
        }
        else{
            alert("Parameter must be of type string for isStateCode");
            return false;
        }
    }
    else{
        alert("Only one parameter is allowed for isStateCode");
        return false;
    }


    //indexOf is case sensitive so UpperCase s
    s = s.toUpperCase();


    //Check the input to make sure it is found but not the delimiter
    return ( (_USStateCodes.indexOf(s) != -1) && (s.indexOf(_delimeter) == -1) );

}

function isPhone(field){
    //The phone number must be all digits and 10 digits

    if (isInteger(field)){
        if (field.value.length == 10){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}
function isOrder(field){

        var _checkbox = field.name + 'check';

    if (document.getElementById(_checkbox).checked){
        if (field.value > 0)
        {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return true;
    }
}


function isValidCreditCard(type, ccnum) {
        //Validate the credit card

        return checkCreditCard(ccnum,type);
}
