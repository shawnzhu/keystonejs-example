# Overview

This is example CMS app for [keystone.js](https://github.com/JedWatson/keystone).

# Install

    $ npm install

# Configuration

Start your mongodb and change value of entry `mongo` in `index.js`.

For example, start mongodb in a docker container:

	$ docker run -d -p 27017:27017 -p 28017:28017 dockerfile/mongodb

# Start

    $ npm start

Then visit `http://localhost:3000` and you will see **Hello World**

You can sign in with demo account `demo@example.com` and password `demo` at `http://localhost:3000/keystone`