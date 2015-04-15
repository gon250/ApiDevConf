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
                // Destroy Tag
                sails.machines['_project_2999_0.0.0'].destroy_tag({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(destroyTag) {
                        return exits.respond({
                            data: destroyTag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(destroyTag) {
                        return exits.error({
                            data: destroyTag,
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
                "name": {
                    "example": "scott"
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Update Tag
                sails.machines['_project_2999_0.0.0'].update_tag({
                    "name": inputs.name,
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(updateTag) {
                        return exits.respond({
                            data: updateTag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(updateTag) {
                        return exits.error({
                            data: updateTag,
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
                "name": {
                    "example": "scott",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Create Tag
                sails.machines['_project_2999_0.0.0'].create_tag({
                    "name": inputs.name
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(createTag) {
                        return exits.respond({
                            data: createTag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(createTag) {
                        return exits.error({
                            data: createTag,
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
                // Find One Tag
                sails.machines['_project_2999_0.0.0'].findOne_tag({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOneTag) {
                        return exits.respond({
                            data: findOneTag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(findOneTag) {
                        return exits.error({
                            data: findOneTag,
                            status: 500
                        });

                    },
                    "notFound": function(findOneTag) {
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
    get_find: function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // List (Blueprint) Tag
                sails.machines['_project_2999_0.0.0'].blueprintFind_tag({}).setEnvironment({
                    req: req,
                    sails: sails
                }).exec({
                    "success": function(listBlueprintTag) {
                        return exits.respond({
                            data: listBlueprintTag,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(listBlueprintTag) {
                        return exits.error({
                            data: listBlueprintTag,
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