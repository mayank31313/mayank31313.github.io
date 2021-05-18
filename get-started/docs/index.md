# Welcome to Control Net

[Official Portfolio](https://controlnet.ml).

## Introduction

Welcome, I am excited to present 
ControlNet is a communication platform for devices like Raspberry Pi's that support python programming language. The purpose to build this platform is to connect various devices over a network(i.e private & public network). Each has a unique use-case.

Control Net Architecture is divided in 3 Projects

* [IOR Control Net Tower](https://github.com/mayank31313/IOR-Project)
* [IOR Socket Server](https://github.com/mayank31313/SocketServer)
* [IOR Video Streamer](https://github.com/mayank31313/IOR-VideoStreaming)

## Getting Started

### Server

#### Setup Docker
Docker is a open platform to run apps in a container and seperate those apps from the infrastructure. You can install docker as per your platform needs from [here](https://docs.docker.com/engine/install/), we will also need Docker Compose which can be installed from this [page](https://docs.docker.com/compose/install/).

#### Download Docker Compose File

    cd ~
    mkdir controlnet-docker
    cd controlnet-docker
    wget https://mayank31313.github.io/docker/full/docker-compose.yml

The above command will download docker-compose file in the current directory

#### Run servers in Docker
To run containers just run the below command in the docker-compose file directory, it will pull necessary images and start docker containers.

    docker-compose up

To stop the containers, run below command

    docker-compose down

### Client (IOR-Python)

The client code is available on this [github repository](https://github.com/mayank31313/ior-python)

#### Setup Client

For this example no external configuration is needed, all the settings are predefined. The below example will only give a use case on the controlnet platform.

    git clone https://github.com/mayank31313/ior-python
    cd ior-python/examples
    python3 LatencyCheck.py ../config/from.json ../config/to.json

#### Usage

    config = {
        "server": "localhost",
        "httpPort": 5001,
        "socketServer": "localhost",
        "tcpPort": 8000,
        #"useSSL": True    # Optional
    }
    
#### Create Instance of IOT Client

    from ior_research.IOTClient import IOTClientWrapper
    iot = IOTClientWrpper(token=token, config = config) #Creating object for IOT Client

#### Setting up Receive Function to do some Operation when a response is received.

    iot.set_on_receive(lambda x: print(x))

#### Last but not the least start the IOTClient

    iot.start()
    iot.join() 
    
    
## Quick Demo

[<img src="https://img.youtube.com/vi/RZJzZkTJpJQ/maxresdefault.jpg" width="50%">](https://youtu.be/RZJzZkTJpJQ)