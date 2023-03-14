import React from 'react';
import Link from "@docusaurus/Link"
// export?
export default function Issue(props) {
  
  
  // can I access the global config to get facebookresearch and hydra without hard coding them?
  const versionedTo = `https://github.com/daxstudio/daxstudio/issues/${props.id}`
  return (<Link to={versionedTo}>#{props.id}</Link>)
}