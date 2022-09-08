const crypto = require('crypto');



/**
 * @desc Create Hash for signature
 * @param string : string
 * @returns string
 */
const createHash = string => {
    return crypto.createHash('sha256').update(string, 'utf8').digest('hex');
};



/**
 * @desc Create a signature for payment process
 * @param string : passphrase
 * @param object : object
 * @returns string
 */
const createSignature = (passphrase, object) => {
    let signatureText = "";

    for (const [_k, _v] of Object.entries(object)) {
      signatureText += `${_k}=${_v}`;
    }

    return createHash( `${passphrase}${signatureText}${passphrase}`);
};

exports.createSignature = createSignature;
