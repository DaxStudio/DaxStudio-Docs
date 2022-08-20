module.exports = async function myPlugin(context, options) {

  const Axios = require('axios');
  const marked = require('marked');
  
  return {
    name: 'docusaurus-plugin-github-releases',
    async loadContent() {
      const releases = await Axios.get('https://api.github.com/repos/daxstudio/daxstudio/releases');
      console.log('Github Releases Loaded');
      return releases.data;
    },
    async contentLoaded({content, actions}) {
      /* ... */
      const {createData, addRoute, setGlobalData} = actions;
      
      const releasesJsonPath = await createData(
        'releases.json',
        JSON.stringify(content)
      );

      setGlobalData({'latest_release': content[0],'all_releases': content});
      
      // Add the '/friends' routes, and ensure it receives the friends props
      addRoute({
        path: '/changelog2',
        component: '@site/src/components/changelog.js',
        modules: {
          releases: releasesJsonPath,
        },
        exact: true,
      });

      addRoute({
        path: '/downloads',
        component: '@site/src/components/download-list.tsx',
        modules: {
          releases: releasesJsonPath,
        },
        exact: true,
      });

    },
    /* other lifecycle API */
  };
};

/*
module.export = async function friendsPlugin(context, options) {
    //var Axios = require('./core/Axios');
    return {

      name: 'docusaurus-friends-plugin',
      async contentLoaded({content, actions}) {
        
        const {createData, addRoute} = actions;
        var Axios = require('./core/Axios');
        // Create friends.json
        const friends = await Axios.get('https://api.github.com/repos/daxstudio/daxstudio/releases');
        const friendsJsonPath = await createData(
          'friends.json',
          JSON.stringify(friends),
        );
        },
        // Add the '/friends' routes, and ensure it receives the friends props
        // addRoute({
        //   path: '/friends',
        //   component: '@site/src/components/Friends.js',
        //   modules: {
        //     friends: friendsJsonPath,
        //   },
        //   exact: true,
        // });
      }
    };
  */