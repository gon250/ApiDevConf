module.exports = {
  "inputs": {
    "id_tag": {
      "example": 123,
      "friendlyName": "id_tag",
      "required": true
    },
    "id_conf": {
      "example": 123,
      "friendlyName": "id_conf",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "id_tag": 123,
        "id_conf": 123,
        "id": 123,
        "createdAt": "2015-04-15T22:12:37.490Z",
        "updatedAt": "2015-04-15T22:12:37.490Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.conftag.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_conftag"
};