var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'VideoUpload', 'coolMethod', [arg0]);
};

function parseArgs(args) {
    var a = [];
    a.push(args.mimeTypes || null);
    a.push(args.sources || null);
    a.push(typeof args.multiple === 'boolean' ? args.multiple : null);
    a.push(args.maxFiles || null);
    a.push(args.maxSize || null);
    return a;
}    
    
function parseStoreArgs(args) {
    var a = [];
    a.push(args.location || null);
    a.push(args.path || null);
    a.push(args.container || null);
    a.push(args.access || null);
    return a;
}    
    
var VideoUpload = {
    /**
     * Set the API key
     * @param key
     */
    setKey:function(key) {
        exec(function() {}, function() {}, 'VideoUpload', 'setKey', [key]);
    },
    /**
     * select a file
     * @param selectOption options
     * @param successCB success callback
     * @param errorCB error callback
     * @return file
     */
    select:function(selectOption, successCB, errorCB) {
        selectOption.multiple = false;
        exec(function(files) {
            successCB && successCB(files[0]);
        }, errorCB, 'VideoUpload', 'select', parseArgs(selectOption));
    },
    /**
     * select multiple files
     * @param selectOption options
     * @param successCB success callback
     * @param errorCB error callback
     * @return files
     */
    selectMultiple:function(selectOption, successCB, errorCB) {
        selectOption.multiple = true;
        exec(successCB, errorCB, 'VideoUpload', 'select', parseArgs(selectOption));
    },
    /**
     * Upload video file
     * @param selectOption options
     * @param storeOptions options
     * @param successCB success callback
     * @param errorCB error callback
     * @return files
     */
    startUpload:function(selectOption, storeOptions, successCB, errorCB) {
        exec(successCB, errorCB, 'VideoUpload', 'startUpload', parseArgs(selectOption).concat(parseStoreArgs(storeOptions)));
    }
};

module.exports = VideoUpload;