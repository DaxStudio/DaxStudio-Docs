import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import {Installer, Portable} from '@site/src/components/Downloads';
import Layout from '@theme/Layout';
import {marked} from 'marked';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function niceBytes(x) {
  let l = 0, n = parseInt(x, 10) || 0;
  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

function fixGithubIssueLinks(oldHTML: string): string {
  const regex = /(?:#)(\d{1,4})(?=\s+)/gi;
  return oldHTML.replace(regex, "<a href=\"https://github.com/daxstudio/daxstudio/issues/$1\">#$1</a>");
}

interface GithubAsset {
  browser_download_url: string;
  created_at: Date;
  name: string;
  size: number;
}

function Asset(asset: GithubAsset) {
  return (
    <div>
      <a href={asset.browser_download_url}>{asset.name}</a>
      <span> | Size: {niceBytes(asset.size)}</span>
      <span> | Date: {moment(asset.created_at).format('DD-MMM-YYYY')}</span>
    </div>
  );
}

function PreviousPreview({tag_name, html_url, assets}) {
  const releaseUrl = html_url || `https://github.com/daxstudio/daxstudio/releases/tag/${tag_name}`;
  const installer = assets.filter(function (asset) { return asset.browser_download_url.endsWith('.exe'); })[0];
  const portable = assets.filter(function (asset) { return asset.browser_download_url.endsWith('.zip'); })[0];
  return (
    <div className='row'>
      <div className='col'>
        <h2>{tag_name}</h2>
        <p><a href={releaseUrl}>view on GitHub&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} width="12" height="12" /></a></p>
        {installer && <Asset {...installer} />}
        {portable && <Asset {...portable} />}
      </div>
    </div>
  );
}

export default function PreviewDownloadsComponent() {
  const data: any = usePluginData('docusaurus-plugin-github-releases');
  const previews = data.all_releases.filter(function (r) {
    return r && r.prerelease === true && r.draft !== true;
  });

  if (previews.length === 0) {
    return (
      <Layout>
        <div className='container'>
          <h1>Preview Downloads</h1>
          <p>No preview releases are currently available.</p>
        </div>
      </Layout>
    );
  }

  const latestPreview = previews[0];
  const previousPreviews = previews.slice(1);

  return (
    <Layout>
      <div className='container'>
        <h1>Current Preview</h1>
        <div className='row'>
          <div className='col '>
            <Installer release={latestPreview} />
          </div>
          <div className='col '>
            <Portable release={latestPreview} />
          </div>
          <div className='col col--4'></div>
        </div>
        {latestPreview.body && (
          <div style={{marginTop: '1rem'}} dangerouslySetInnerHTML={{__html: fixGithubIssueLinks(marked.parse(latestPreview.body) as string)}} />
        )}
      </div>
      <div className='container'>
        <br />
        <br />
        <h1>Previous Previews</h1>
        {previousPreviews.length === 0 ? (
          <p>No previous preview releases.</p>
        ) : (
          previousPreviews.map((props, idx) => (
            <PreviousPreview key={idx} {...props} />
          ))
        )}
      </div>
    </Layout>
  );
}
