var Machine = require("machine");
module.exports = {
    post_create: function(req, res) {
        Machine.build({
            inputs: {
                "id_conf": {
                    "example": 123,
                    "required": true
                },
                "ip_address": {
                    "example": "scott",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Create Score
                sails.machines['_project_2999_0.0.0'].create_score({
                    "id_conf": inputs.id_conf,
                    "ip_address": inputs.ip_address
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(createScore) {
                        return exits.respond({
                            data: createScore,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(createScore) {
                        return exits.error({
                            data: createScore,
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    },
    get_$id: function(req, res) {
        Machine.build({
            inputs: {
                "id": {
                    "example": "abc123",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Find One Score
                sails.machines['_project_2999_0.0.0'].findOne_score({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOneScore) {
                        return exits.respond({
                            data: findOneScore,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(findOneScore) {
                        return exits.error({
                            data: findOneScore,
                            status: 500
                        });

                    },
                    "notFound": function(findOneScore) {
                        return exits.respond({
                            action: "respond_with_status",
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    },
    put_$id: function(req, res) {
        Machine.build({
            inputs: {
                "id": {
                    "example": "abc123",
                    "required": true
                },
                "id_conf": {
                    "example": 123
                },
                "ip_address": {
                    "example": "scott"
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Update Score
                sails.machines['_project_2999_0.0.0'].update_score({
                    "id_conf": inputs.id_conf,
                    "ip_address": inputs.ip_address,
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(updateScore) {
                        return exits.respond({
                            data: updateScore,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(updateScore) {
                        return exits.error({
                            data: updateScore,
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    },
    get_find: function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // List (Blueprint) Score
                sails.machines['_project_2999_0.0.0'].blueprintFind_score({}).setEnvironment({
                    req: req,
                    sails: sails
                }).exec({
                    "success": function(listBlueprintScore) {
                        return exits.respond({
                            data: listBlueprintScore,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(listBlueprintScore) {
                        return exits.error({
                            data: listBlueprintScore,
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    },
    delete_$id: function(req, res) {
        Machine.build({
            inputs: {
                "id": {
                    "example": "abc123",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Destroy Score
                sails.machines['_project_2999_0.0.0'].destroy_score({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(destroyScore) {
                        return exits.respond({
                            data: destroyScore,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(destroyScore) {
                        return exits.error({
                            data: destroyScore,
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};