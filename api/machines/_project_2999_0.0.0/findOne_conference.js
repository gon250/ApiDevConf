module.exports = {
  "inputs": {
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Conference instances"
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
    },
    "notFound": {
      "void": true
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.conference.findOne(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, record) {
      if (err) {
        return exits.error(err);
      }
      if (!record) {
        return exits.notFound();
      }
      return exits.success(record);
    });
  },
  "identity": "findOne_conference"
};