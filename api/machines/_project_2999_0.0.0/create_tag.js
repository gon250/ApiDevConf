module.exports = {
  "inputs": {
    "name": {
      "example": "scott",
      "friendlyName": "name",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "name": "scott",
        "id": 123,
        "createdAt": "2015-04-15T22:11:25.627Z",
        "updatedAt": "2015-04-15T22:11:25.627Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.tag.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_tag"
};