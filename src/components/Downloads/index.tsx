import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import styles from './styles.module.css';
import {usePluginData} from '@docusaurus/useGlobalData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import UpdateDownloads from '@site/src/components/UpdateDownloads'

interface ReleaseItem  {
//    url: string;
    browser_download_url: string;
    download_cnt: number;
    download_size: number;
    created_at: Date;
    download_name: string;
 //   tag_name: string;
 //   body: JSX.Element;
  };

interface Release  {
    tag_name: string;
    installer: ReleaseItem | null;
    portable: ReleaseItem | null;
}

interface DownloadProps {
    release?: any;
}



const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x){

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

function getLatestStableRelease(allReleases: any[]) {
    return allReleases.find(function(r){ return r && r.prerelease === false && r.draft !== true; });
}

function  getRelease(override?: any): Release | null {
    const data: any = usePluginData('docusaurus-plugin-github-releases');
    const latest = override ?? getLatestStableRelease(data.all_releases);
    if (!latest) return null;
    const installer = latest.assets.filter(function(asset){ return asset.browser_download_url.endsWith('.exe') })[0];
    const portable = latest.assets.filter(function(asset){ return asset.browser_download_url.endsWith('.zip') })[0];
    if (!installer && !portable) return null;
    const release:Release = {'tag_name': (latest.tag_name), 
                        'installer': installer ? {
                          'browser_download_url': (installer.browser_download_url.toString()),
                          'download_size': (installer.size),
                          'download_cnt': (installer.download_cnt),
                          'created_at': installer.created_at, 
                          'download_name': installer.name
                        } : null, 
                        'portable': portable ? {
                          'browser_download_url': (portable.browser_download_url.toString()),
                          'download_size': (portable.size),
                          'download_cnt': (portable.download_cnt),
                          'created_at': portable.created_at,
                          'download_name': portable.name
                        } : null
                    };
    return release;
} 



export function Installer({release}: DownloadProps = {}) {
  const resolvedRelease = getRelease(release);
  const rel = resolvedRelease?.installer;
  const cacheBucket = release?.prerelease ? 'preview' : 'main';
  const handleOnFocus = () => {
    console.log('onFocus event was handled');
  }
  if (!rel) return null;
return (
    <div className="float-end" >
    <a href={rel.browser_download_url}>
      <div className="button button--lg button--success float-right"> 
        <h3><span><FontAwesomeIcon icon={faDownload} width="20px" height="20px" />&nbsp; {rel.download_name}</span></h3>
        <div>(installer)</div>
      </div>
    </a>
    <div className="download-info">
    <FontAwesomeIcon icon={faFloppyDisk} width="16" height="16" />
      <span>&nbsp;Size: {niceBytes(rel.download_size)} | </span>
      <FontAwesomeIcon icon={faCalendarDays} width="16" height="16" />
      <span>&nbsp;{moment(rel.created_at).format('DD-MMM-YYYY')}</span>
      <UpdateDownloads type="exe" releaseTag={resolvedRelease?.tag_name} cacheBucket={cacheBucket}/>
    </div>
    
  </div>

);
}

export function Portable({release}: DownloadProps = {}) {
//<!-- Portable Version download link -->
const resolvedRelease = getRelease(release);
const rel = resolvedRelease?.portable;
const cacheBucket = release?.prerelease ? 'preview' : 'main';
if (!rel) return null;
return (
  <div>
     <a href={rel.browser_download_url}>
      <div className="button button--lg button--secondary"> 
        <h3><span><FontAwesomeIcon icon={faDownload}  width="20px" height="20px" />&nbsp; {rel.download_name}</span></h3>
        <div>(portable)</div>
      </div>
    </a>

    <div className="download-info">
      <FontAwesomeIcon icon={faFloppyDisk} width="16" height="16"/> <span>Size: {niceBytes(rel.download_size)}  | </span>
      <FontAwesomeIcon icon={faCalendarDays} width="16" height="16" />&nbsp;<span>{moment(rel.created_at).format('DD-MMM-YYYY')}</span>
      <UpdateDownloads type="zip" releaseTag={resolvedRelease?.tag_name} cacheBucket={cacheBucket}/> 
    </div>
  </div>
);
}

export default function Downloads(): JSX.Element {
   return (
     <section className={styles.features}>
       <div className="container">   
             <Installer  />
       </div>
     </section>
   );
}

