/*
* First module
*/

exports.myLog = function (msg) {
    console.log('Logging: ' + msg + ' on ' + Date());
};

exports.myDateTime = function () {
    return Date();
};

exports.bin = function (input) {
    return input.toString(2);
};

exports.hex = function (input) {
    return input.toString(16);
};

exports.testPage = function (pName) {
    console.log('Logging: testPage pName='+pName);
    var page =  '<!DOCTYPE html>' +
    '<html>' +
    ' <head>' +
    ' <meta charset="utf-8" />' +
    ' <title>' + pName + '</title>' +
    ' </head>' +
    ' <body>' +
    ' <p><strong>TEST PAGE</strong></p>' +
    ' <p>Date & Time is <strong>' +   Date() +   ' </strong></p>' +
    ' </body>' +
    '</html>';
    console.log('Logging: testPage is '+ page);
    return page;
};

exports.testNamePage = function (pName, firstName, lastName) {
    console.log('Logging: testNamePage pName='+pName);
    var page =  '<!DOCTYPE html>' +
    '<html>' +
    ' <head>' +
    ' <meta charset="utf-8" />' +
    ' <title>' + pName + '</title>' +
    ' </head>' +
    ' <body>' +
    ' <p><strong>TEST PAGE WITH INPUT NAMES</strong></p>' +
    ' <p>Date & Time is ' +   Date() +   ' </strong></p>' +
    ' Input First Name is ' + firstName + ' and Last Name is ' + lastName +
    ' </body>' +
    '</html>';
    console.log('Logging: testNamePage is '+ page);
    return page;    
};

