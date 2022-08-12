import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import {marked} from 'marked';


function Release({tag_name, body}) {
  return (
    <div >
      <div className="">
        <h1>{tag_name}</h1>
        <div dangerouslySetInnerHTML={{__html:marked.parse(body)}}></div>
      </div>
    </div>
  );
}

export default function FriendsComponent({releases}) {
  const data = usePluginData('docusaurus-plugin-github-releases');
  //console.log(data);

  return <div>
    <div>The lastest release is: {data.latest_release.tag_name}</div>
    {releases.map((props, idx) => (
            <Release key={idx} {...props} />
          ))}
    </div>;
}