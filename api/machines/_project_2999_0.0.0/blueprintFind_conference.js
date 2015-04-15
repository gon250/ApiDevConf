module.exports = {
  "inputs": {},
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "description": "scott",
        "title": "scott",
        "link": "scott",
        "confDate": "scott",
        "active": true,
        "id": 123,
        "createdAt": "2015-04-15T22:04:32.544Z",
        "updatedAt": "2015-04-15T22:04:32.544Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var where = env.req.params.all();
    where = env.sails.util.omit(where, ['limit', 'skip', 'sort']);
    env.sails.models.conference.find(where).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "blueprintFind_conference"
};