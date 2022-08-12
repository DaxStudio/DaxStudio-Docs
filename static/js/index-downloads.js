window.onload = function() {
    console.log('onload executed');
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        if (localStorage.release) {
            var release = JSON.parse(localStorage.release);
        }
    } else {
        // Sorry! No Web Storage support..
    }

    var install_cnt = document.getElementById('download_cnt');
    var portable_cnt = document.getElementById('download_cnt_zip');
    var hoursSinceDownloadRefresh = 0;

    // start with the cached download count if we have one
    if (release && release.downloadCnt ) {
        console.log('returning download cnt from cache');

        install_cnt.innerText =  release.downloadCnt.toLocaleString() ;
        portable_cnt.innerText =  release.downloadCntZip.toLocaleString() ;

        var today = new Date();
        var lastRefresh = new Date(release.refreshDate);
        hoursSinceDownloadRefresh = Math.round(Math.abs(today - lastRefresh)/36e5);
        //console.log("hours since last download cnt refresh: " + hoursSinceDownloadRefresh);
    } 
    
    // we only refresh the download count if it's older than 1 hour to try
    // and prevent errors from github rate limiting the api
    if (!release || hoursSinceDownloadRefresh > 1 || !release.downloadCnt)
    {

        var request = new XMLHttpRequest();
        var zipCnt = 0;
        var exeCnt = 0;

        request.open('GET', 'https://api.github.com/repos/daxstudio/daxstudio/releases/latest', true);
        
        request.onload = () => {
            console.log('json request onload');
            if (request.readyState === 4 && request.status === 200) {
                var data = JSON.parse(request.responseText);
                data.assets.forEach(function(asset){
                    if (asset.name.endsWith(".zip")) {zipCnt = asset.download_count}
                    if (asset.name.endsWith(".exe")) {exeCnt = asset.download_count}    

                    localData = {
                        refreshDate: new Date(),
                        downloadCnt: exeCnt,
                        downloadCntZip: zipCnt,
                        tagName: data.tag_name
                    }
            
                    if (typeof(Storage) !== "undefined") {
                        
                        localStorage.release = JSON.stringify(localData);
                    }
                    
                    console.log('downloads: ' + data.assets[0].download_count);
                    install_cnt.innerText =  localData.downloadCnt ;
                    portable_cnt.innerText = localData.downloadCntZip ;

                });
    
            } else {
                //Error
            }
        };
        
        request.onerror = (err) => {
            this.setState({error: err})
        };
        
        request.send();


    }
  };