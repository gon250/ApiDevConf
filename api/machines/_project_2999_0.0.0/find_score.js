module.exports = {
  "inputs": {
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Score instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "id_conf": 123,
        "ip_address": "scott",
        "id": 123,
        "createdAt": "2015-04-15T22:20:00.420Z",
        "updatedAt": "2015-04-15T22:20:00.420Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.score.find(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "find_score"
};