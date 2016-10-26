angular
  .module("graphite")
  .factory("Post", postFactory);

  postFactory.$inject = ["$resource", "API"];
  function postFactory($resource, API){
    return $resource(`${API}/posts/:id`,
      { id: '@_id'},
      {
        'get':            { method: 'GET' },
        'save':           { method: 'POST' },
        'remove':         { method: 'DELETE' },
        'delete':         { method: 'DELETE' },
        'query':          { method: 'GET', isArray: false },
        'update':         { method: 'PUT' },
        'follow':         {
          method: 'POST',
          url: `${API}/follow`,
        },
        'query_for_user': {
          method: 'POST',
          url: `${API}/my-posts`,
        }
      }
    );
  }
