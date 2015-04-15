module.exports = {
  "inputs": {
    "id_conf": {
      "example": 123,
      "friendlyName": "id_conf",
      "required": true
    },
    "ip_address": {
      "example": "scott",
      "friendlyName": "ip_address",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "id_conf": 123,
        "ip_address": "scott",
        "id": 123,
        "createdAt": "2015-04-15T22:20:00.420Z",
        "updatedAt": "2015-04-15T22:20:00.420Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.score.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_score"
};