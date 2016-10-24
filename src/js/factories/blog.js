angular
  .module("graphite")
  .factory("Blog", blogFactory);

  blogFactory.$inject = ["$resource", "API"];
  function blogFactory($resource, API){
    return $resource(`${API}/blogs/:id`,
      { id: '@_id'},
      {
        'get':            { method: 'GET' },
        'save':           { method: 'POST' },
        'remove':         { method: 'DELETE' },
        'delete':         { method: 'DELETE' },
        'query':          { method: 'GET', isArray: false },
        'update':         { method: 'PUT' },
        'query_for_user': {
          method: 'GET',
          url: `${API}/my-blogs`,
        }
      }
    );
  }
