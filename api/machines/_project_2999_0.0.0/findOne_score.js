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
    },
    "notFound": {
      "void": true
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.score.findOne(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, record) {
      if (err) {
        return exits.error(err);
      }
      if (!record) {
        return exits.notFound();
      }
      return exits.success(record);
    });
  },
  "identity": "findOne_score"
};