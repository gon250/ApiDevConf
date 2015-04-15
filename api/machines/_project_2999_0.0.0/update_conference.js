module.exports = {
  "inputs": {
    "description": {
      "example": "scott",
      "friendlyName": "description"
    },
    "title": {
      "example": "scott",
      "friendlyName": "title"
    },
    "link": {
      "example": "scott",
      "friendlyName": "link"
    },
    "confDate": {
      "example": "scott",
      "friendlyName": "confDate"
    },
    "active": {
      "example": true,
      "friendlyName": "active"
    },
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Conference instances"
    }
  },
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
    env.sails.models.conference.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_conference"
};