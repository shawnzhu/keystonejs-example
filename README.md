# Overview

This is example CMS app for [keystone.js](https://github.com/JedWatson/keystone).

# Getting started

	$ git clone https://github.com/shawnzhu/keystonejs-example.git
	$ cd keystonejs-example

Start mongodb:

	$ docker run -d -name mongodb dockerfile/mongodb

Start keystoneJS app by linking mongodb and mount application directory:

    $ docker run -d -link mongodb:db -p 3000:3000 \
    -v $(pwd):/root/keystonejs-example:rw dockerfile/nodejs \
    bash /root/keystonejs-example/start.sh

Make sure the app is started by checking logs:

	$ docker logs <keystone-container-id>

Then visit `http://localhost:3000` and you will see *Hello World*

You can sign in `http://localhost:3000/keystone` with demo account `demo@example.com` and password `demo`.