# Overview

This is example CMS app for [keystone.js](https://github.com/JedWatson/keystone).

Differences from [Jed's keystone demo](https://github.com/JedWatson/keystone-demo) app:

* start demo inside docker containers to get started quicker (and make README file shorter).
* use popular [mustache](https://github.com/janl/mustache.js) as template engine

# Prerequiste

* docker installed. See [Docker installation](https://www.docker.io/gettingstarted/#h_installation)

# Start

1. clone this example app:
	
	$ git clone https://github.com/shawnzhu/keystonejs-example.git

2. start mongodb in a docker container:

    $ docker run -d -link mongodb:db -p 3000:3000 \
    -v $(pwd):/root/keystonejs-example:rw dockerfile/nodejs \
    bash /root/keystonejs-example/start.sh

Make sure the app is started by checking logs:

	$ docker logs <keystone-container-id>

# Next

Visit `http://localhost:3000` and you will see **Hello World**.

Sign in `http://localhost:3000/keystone` with demo admin account `demo@example.com` and password `demo`.
