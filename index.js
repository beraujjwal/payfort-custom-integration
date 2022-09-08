const axios = require('axios').default;
const config = require("./config");
const helpers = require("./helpers");



/**
 * @desc Generate a client object for payment process
 * @param string : environment
 * @param object : data
 * @returns object : client
 */
const createClient = function(environment, data){
    const client = {
        environment : environment,
        access_code : data.access_code,
        merchant_identifier : data.merchant_identifier,
        passphrase : data.passphrase
    };

    if(data.checkoutUrl){
        client.url = data.checkoutUrl;
    }else{
        if(environment == "development"){
            client.url = config.checkoutUrl.development;
        }else{
            client.url = config.checkoutUrl.production;
        }
    }
    
    return client;
};



/**
 * @desc Create a signature for payment process
 * @param string : passphrase
 * @param object : data
 * @returns string : signature
 */
const createSignature = function(passphrase, data){
    const signature = helpers.createSignature(passphrase, data);
    return signature;
};



/**
 * @desc For payment process
 * @param object : client
 * @param object : data
 * @param function : callback
 * @returns object : client
 */
const sendRequest = function(client, data){
    data.access_code = client.access_code;
    data.merchant_identifier = client.merchant_identifier;
    if(!data.signature){
        data.signature = createSignature(client.passphrase, data);
    }

    axios.post(client.url, data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            throw new Error(error)
        });
};



exports.createClient = createClient;
exports.createSignature = createSignature;
exports.sendRequest = sendRequest;
