import React from 'react'
import Axios from 'axios'

interface UpdateDownloadsProps
{
    type : string
    releaseTag?: string
    cacheBucket?: 'main' | 'preview'
}

class UpdateDownloads extends React.Component<UpdateDownloadsProps> {
    //handleOnFocus() { console.log("hello from updateDownloads");}
    render() {
        const {type, releaseTag, cacheBucket = 'main'} = this.props;

        // This component depends on localStorage and the GitHub API, neither of
        // which should be touched during server-side rendering. Bail out early
        // on the server to avoid hitting the GitHub API rate limit (60/hr per
        // IP unauthenticated) during the static build.
        if (typeof window === 'undefined') {
            return (
                <span>&nbsp;|&nbsp;downloads: <span id="download_cnt" className='badge badge-info'>0</span>
                </span>
            );
        }

        //console.log('onload executed (' + type + ")");
        var install_cnt = 0;
        const storageKey = cacheBucket === 'preview' ? 'release_preview' : 'release';

        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            if (localStorage[storageKey]) {
                var release = JSON.parse(localStorage[storageKey]);
            }
        } else {
            // Sorry! No Web Storage support..
        }

        var hoursSinceDownloadRefresh = 0;

        // start with the cached download count if we have one
        if (release && release.downloadCnt ) {
            //console.log('returning download cnt from cache');

            install_cnt =  type == 'zip' ?release.downloadCntZip.toLocaleString() :release.downloadCnt.toLocaleString() ;

            var today: Date = new Date();
            var lastRefresh:Date = new Date(release.refreshDate);
            hoursSinceDownloadRefresh = Math.round(Math.abs(today.getTime() - lastRefresh.getTime())/36e5);
            //console.log("hours since last download cnt refresh: " + hoursSinceDownloadRefresh);
        } 
        
        // we only refresh the download count if it's older than 1 hour to try
        // and prevent errors from github rate limiting the api
        const releaseTagMismatch = !!releaseTag && release && release.tagName !== releaseTag;
        if (!release || hoursSinceDownloadRefresh > 1 || !release.downloadCnt || releaseTagMismatch)
        {

            //var request = new XMLHttpRequest();
            var zipCnt = 0;
            var exeCnt = 0;

            const requestUrl = releaseTag
                ? `https://api.github.com/repos/daxstudio/daxstudio/releases/tags/${encodeURIComponent(releaseTag)}`
                : 'https://api.github.com/repos/daxstudio/daxstudio/releases/latest';
            const releases = Axios.get(requestUrl);
            releases.then((response) => {

                //console.log(response.data);
                var data = response.data;
                data.assets.forEach(function(asset: { name: string; download_count: number; }){
                    if (asset.name.endsWith(".zip")) {zipCnt = asset.download_count}
                    if (asset.name.endsWith(".exe")) {exeCnt = asset.download_count}    
                });

                var localData = {
                    refreshDate: new Date(),
                    downloadCnt: exeCnt,
                    downloadCntZip: zipCnt,
                    tagName: data.tag_name
                }
        
                if (typeof(Storage) !== "undefined") {
                    localStorage[storageKey] = JSON.stringify(localData);
                }
                
                //console.log('downloads: ' + data.assets[0].download_count);
                install_cnt =  type == 'zip' ? localData.downloadCntZip : localData.downloadCnt ;
   
            });

        }
        return (
        <span>&nbsp;|&nbsp;downloads: <span id="download_cnt" className='badge badge-info'>{install_cnt.toLocaleString()} </span>
        </span>
        )

    }
    
}
export default UpdateDownloads;