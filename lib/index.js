'use strict';

const Package = require('../package.json');
const RouteUtils = require('./route-utils');

exports.register = (server, options, next) => {

    RouteUtils.giveServer(server);
    next();
};

exports.register.attributes = {
    pkg: Package
};

exports.RouteUtils = RouteUtils;
