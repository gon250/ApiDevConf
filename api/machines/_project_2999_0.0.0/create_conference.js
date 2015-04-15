module.exports = {
  "inputs": {
    "description": {
      "example": "scott",
      "friendlyName": "description",
      "required": true
    },
    "title": {
      "example": "scott",
      "friendlyName": "title",
      "required": true
    },
    "link": {
      "example": "scott",
      "friendlyName": "link",
      "required": true
    },
    "confDate": {
      "example": "scott",
      "friendlyName": "confDate",
      "required": true
    },
    "active": {
      "example": true,
      "friendlyName": "active",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "description": "scott",
        "title": "scott",
        "link": "scott",
        "confDate": "scott",
        "active": true,
        "id": 123,
        "createdAt": "2015-04-15T22:04:32.544Z",
        "updatedAt": "2015-04-15T22:04:32.544Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.conference.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_conference"
};