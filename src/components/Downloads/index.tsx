import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import styles from './styles.module.css';
import {usePluginData} from '@docusaurus/useGlobalData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
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
    installer: ReleaseItem;
    portable: ReleaseItem;
}



const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x){

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

function  getRelease(): Release {
    const data: any = usePluginData('docusaurus-plugin-github-releases');
    const latest = data.all_releases[0];
    const installer = latest.assets.filter(function(asset){ return asset.browser_download_url.endsWith('.exe') })[0];
    const portable = latest.assets.filter(function(asset){ return asset.browser_download_url.endsWith('.zip') })[0];
    const release:Release = {'tag_name': (latest.tag_name), 
                        'installer': {
                          'browser_download_url': (installer.browser_download_url.toString()),
                          'download_size': (installer.size),
                          'download_cnt': (installer.download_cnt),
                          'created_at': installer.created_at, 
                          'download_name': installer.name
                        }, 
                        'portable': {
                          'browser_download_url': (portable.browser_download_url.toString()),
                          'download_size': (portable.size),
                          'download_cnt': (portable.download_cnt),
                          'created_at': portable.created_at,
                          'download_name': portable.name
                        }
                    };
    return release;
} 



export function Installer() {
  const rel = getRelease().installer;
  const handleOnFocus = () => {
    console.log('onFocus event was handled');
  }
return (
    <div className="float-end" >
    <a href={rel.browser_download_url}>
      <div className="button button--lg button--success float-right"> 
        <h3><span><FontAwesomeIcon icon={solid('download')} width="20px" height="20px" />&nbsp; {rel.download_name}</span></h3>
        <div>(installer)</div>
      </div>
    </a>
    <div className="download-info">
    <FontAwesomeIcon icon={solid('floppy-disk')} width="16" height="16" />
      <span>&nbsp;Size: {niceBytes(rel.download_size)} | </span>
      <FontAwesomeIcon icon={regular('calendar-days')} width="16" height="16" />
      <span>&nbsp;{moment(rel.created_at).format('DD-MMM-YYYY')}</span>
      <UpdateDownloads type="exe"/>
    </div>
    
  </div>

);
}

export function Portable() {
//<!-- Portable Version download link -->
const rel = getRelease().portable;
return (
  <div>
     <a href={rel.browser_download_url}>
      <div className="button button--lg button--secondary"> 
        <h3><span><FontAwesomeIcon icon={solid('download')}  width="20px" height="20px" />&nbsp; {rel.download_name}</span></h3>
        <div>(portable)</div>
      </div>
    </a>

    <div className="download-info">
      <FontAwesomeIcon icon={solid('floppy-disk')} width="16" height="16"/> <span>Size: {niceBytes(rel.download_size)}  | </span>
      <FontAwesomeIcon icon={regular('calendar-days')} width="16" height="16" />&nbsp;<span>{moment(rel.created_at).format('DD-MMM-YYYY')}</span>
      <UpdateDownloads type="zip"/> 
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

