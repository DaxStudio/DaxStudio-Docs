import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import {Installer,Portable} from '@site/src/components/Downloads';
import Layout from '@theme/Layout';
import moment from 'moment';

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function niceBytes(x){
  let l = 0, n = parseInt(x, 10) || 0;
  while(n >= 1024 && ++l){
      n = n/1024;
  }
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

interface GithubAsset {
  browser_download_url: string;
  created_at: Date;
  name: string;
  size: number;
}

function Asset(asset:GithubAsset){
  //console.log(asset.browser_download_url);
  return (
    <div>
      <a href={asset.browser_download_url}>{asset.name}</a><span> | Size: {niceBytes(asset.size)}</span><span> | Date: {moment(asset.created_at).format('DD-MMM-YYYY')}</span>
    </div>
  );
}

function Release({tag_name, assets}) {
  const installer = assets.filter(function(asset){ return asset.browser_download_url.endsWith('.exe') })[0];
  const portable = assets.filter(function(asset){ return asset.browser_download_url.endsWith('.zip') })[0];
  // console.log(installer);
  // console.log(portable);
  if (portable)
  return (
    <div className='row'>
      <div className="col">
        <h2>{tag_name}</h2>
        <Asset {...installer}/>
        <Asset {...portable}/>
      </div>
    </div>
  )
  else
  return(
    <div className='row'>
      <div className="col">
        <h2>{tag_name}</h2>
        <Asset {...installer}/>
      </div>
    </div>

  );
}

export default function DownloadsComponent() {
  
  const data: any = usePluginData('docusaurus-plugin-github-releases');
  const all_releases = data.all_releases;
  const releases = [...all_releases]
  //console.log(data);
  releases.shift();
  return <div>
    <Layout>
      <div className='container'>
        <h1>Current Release</h1>
        <div className='row'>
          
          <div className='col '>      
            <Installer />
          </div> 
          <div className='col '>
            <Portable />
          </div>
          <div className='col col--4'></div>
        </div>
    </div>
    <div className='container'>
      <br/>
      <br/>
      <h1>Previous Releases</h1>
      {releases.map((props, idx) => (
            <Release key={idx} {...props} />
          ))}
      </div>
    </Layout>
  </div>;
}