var Machine = require("machine");
module.exports = {
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
                // Destroy Conftag
                sails.machines['_project_2999_0.0.0'].destroy_conftag({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(destroyConftag) {
                        return exits.respond({
                            data: destroyConftag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(destroyConftag) {
                        return exits.error({
                            data: destroyConftag,
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
                "id_tag": {
                    "example": 123
                },
                "id_conf": {
                    "example": 123
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Update Conftag
                sails.machines['_project_2999_0.0.0'].update_conftag({
                    "id_tag": inputs.id_tag,
                    "id_conf": inputs.id_conf,
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(updateConftag) {
                        return exits.respond({
                            data: updateConftag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(updateConftag) {
                        return exits.error({
                            data: updateConftag,
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
                // Find One Conftag
                sails.machines['_project_2999_0.0.0'].findOne_conftag({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOneConftag) {
                        return exits.respond({
                            data: findOneConftag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(findOneConftag) {
                        return exits.error({
                            data: findOneConftag,
                            status: 500
                        });

                    },
                    "notFound": function(findOneConftag) {
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
    post_create: function(req, res) {
        Machine.build({
            inputs: {
                "id_tag": {
                    "example": 123,
                    "required": true
                },
                "id_conf": {
                    "example": 123,
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Create Conftag
                sails.machines['_project_2999_0.0.0'].create_conftag({
                    "id_tag": inputs.id_tag,
                    "id_conf": inputs.id_conf
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(createConftag) {
                        return exits.respond({
                            data: createConftag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(createConftag) {
                        return exits.error({
                            data: createConftag,
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
                // List (Blueprint) Conftag
                sails.machines['_project_2999_0.0.0'].blueprintFind_conftag({}).setEnvironment({
                    req: req,
                    sails: sails
                }).exec({
                    "success": function(listBlueprintConftag) {
                        return exits.respond({
                            data: listBlueprintConftag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(listBlueprintConftag) {
                        return exits.error({
                            data: listBlueprintConftag,
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