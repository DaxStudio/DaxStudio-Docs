import React from 'react'

interface UpdateDownloadsProps
{
    type : string
}

class UpdateDownloads extends React.Component<UpdateDownloadsProps> {
    handleOnFocus() { console.log("hello from updateDownloads");}
    render() {
        const {type} = this.props;

        //console.log('onload executed (' + type + ")");
        var install_cnt = 0;
        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            if (localStorage.release) {
                var release = JSON.parse(localStorage.release);
            }
        } else {
            // Sorry! No Web Storage support..
        }

        var hoursSinceDownloadRefresh = 0;

        // start with the cached download count if we have one
        if (release && release.downloadCnt ) {
            //console.log('returning download cnt from cache');

            install_cnt =  type == 'zip' ?release.downloadCntZip.toLocaleString() :release.downloadCnt.toLocaleString() ;
            //portable_cnt =  release.downloadCntZip.toLocaleString() ;

            var today: Date = new Date();
            var lastRefresh:Date = new Date(release.refreshDate);
            hoursSinceDownloadRefresh = Math.round(Math.abs(today.getTime() - lastRefresh.getTime())/36e5);
            console.log("hours since last download cnt refresh: " + hoursSinceDownloadRefresh);
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

                        var localData = {
                            refreshDate: new Date(),
                            downloadCnt: exeCnt,
                            downloadCntZip: zipCnt,
                            tagName: data.tag_name
                        }
                
                        if (typeof(Storage) !== "undefined") {
                            
                            localStorage.release = JSON.stringify(localData);
                        }
                        
                        console.log('downloads: ' + data.assets[0].download_count);
                        install_cnt =  type == 'zip' ? localData.downloadCntZip : localData.downloadCnt ;
                        //portable_cnt.innerText = localData.downloadCntZip.toString() ;

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
        return (
        <span>&nbsp;|&nbsp;downloads: <span id="download_cnt" className='badge badge-info'>{install_cnt.toLocaleString()} </span>
        </span>
        )

    }
    
}
export default UpdateDownloads;