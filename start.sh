#!/usr/bin/bash

BASEDIR=$( dirname "${BASH_SOURCE[0]}")

export EXAMPLE_MONGODB_URL="mongodb://${DB_PORT_27017_TCP_ADDR}/keystonejs-example"

pushd ${BASEDIR} > /dev/null

/usr/bin/npm install
/usr/bin/npm start

popd > /dev/null