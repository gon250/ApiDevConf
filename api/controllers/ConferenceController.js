var Machine = require("machine");
module.exports = {
    put_$id: function(req, res) {
        Machine.build({
            inputs: {
                "id": {
                    "example": "abc123",
                    "required": true
                },
                "description": {
                    "example": "scott"
                },
                "title": {
                    "example": "scott"
                },
                "link": {
                    "example": "scott"
                },
                "confDate": {
                    "example": "scott"
                },
                "active": {
                    "example": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Update Conference
                sails.machines['_project_2999_0.0.0'].update_conference({
                    "description": inputs.description,
                    "title": inputs.title,
                    "link": inputs.link,
                    "confDate": inputs.confDate,
                    "active": inputs.active,
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(updateConference) {
                        return exits.respond({
                            data: updateConference,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(updateConference) {
                        return exits.error({
                            data: updateConference,
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
                "description": {
                    "example": "scott",
                    "required": true
                },
                "title": {
                    "example": "scott",
                    "required": true
                },
                "link": {
                    "example": "scott",
                    "required": true
                },
                "confDate": {
                    "example": "scott",
                    "required": true
                },
                "active": {
                    "example": true,
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Create Conference
                sails.machines['_project_2999_0.0.0'].create_conference({
                    "description": inputs.description,
                    "title": inputs.title,
                    "link": inputs.link,
                    "confDate": inputs.confDate,
                    "active": inputs.active
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(createConference) {
                        return exits.respond({
                            data: createConference,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(createConference) {
                        return exits.error({
                            data: createConference,
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
                // Find One Conference
                sails.machines['_project_2999_0.0.0'].findOne_conference({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOneConference) {
                        return exits.respond({
                            data: findOneConference,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(findOneConference) {
                        return exits.error({
                            data: findOneConference,
                            status: 500
                        });

                    },
                    "notFound": function(findOneConference) {
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
                // Destroy Conference
                sails.machines['_project_2999_0.0.0'].destroy_conference({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(destroyConference) {
                        return exits.respond({
                            data: destroyConference,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(destroyConference) {
                        return exits.error({
                            data: destroyConference,
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
                // List (Blueprint) Conference
                sails.machines['_project_2999_0.0.0'].blueprintFind_conference({}).setEnvironment({
                    req: req,
                    sails: sails
                }).exec({
                    "success": function(listBlueprintConference) {
                        return exits.respond({
                            data: listBlueprintConference,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(listBlueprintConference) {
                        return exits.error({
                            data: listBlueprintConference,
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