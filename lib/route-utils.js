'use strict';

const Joi = require('joi');
const internals = {};

exports.matchModelSchema = (model) => {

    return (value, options, next) => {

        try {
            const res = Joi.validate(value, internals.server.models(true)[model].joiSchema);
            next(res.err, res.value);
        }
        catch (err) {
            console.log(err);
        }
    };
};

exports.giveServer = (srv) => {

    internals.server = srv;
};
