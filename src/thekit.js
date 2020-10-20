function fixurl( currentUrl,url){
    if (url.startsWith("/")) {
        return url.substring(1);
    }
    ////////////////////
    var folder;
    if (currentUrl.indexOf("/")>=0) {
        folder = currentUrl.substring(0, currentUrl.lastIndexOf("/") + 1);
        if(folder.startsWith("/")){
            folder = folder.substring(1);
        }
    } else {
        folder = "";
    }
    url = url.trim();
    if (url.startsWith("./")) {
        url = url.substring("./".length);
    }
    while (url.startsWith("../")) {
        folder = folder.substring(0, folder.length - 1);
        folder = folder.substring(0, folder.lastIndexOf("/") + 1);
        url = url.substring("../".length);
    }
    
    return folder + url;
    }
    module.exports = {fixurl:fixurl};