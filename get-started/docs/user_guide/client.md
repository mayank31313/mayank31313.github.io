# Client Configuration

### To be known words

#### Device
 A unique ior-client process, that runs on the client device. These devices are seperated by unique device code in the given user context.

#### Connection
 A connection is connectivity bridge between 2 clients, managed by the IOR-SocketServer. Before the target devices connect to server, a connection has be specified on the server side to get it to work.


### Connections Config

After cloning this [repository](https://github.com/mayank31313/ior-python), the directory structure is a follows

    ./ior-python
        /config
            /from.json
            /from2.json
            /to.json
            /to2.json
            /iorConfigs.config

These are the client connection config that are required by every client that connects to the IOR-SocketServer, and are very important. These files contains server and client related configs. These files can also be downloaded through Controlnet Frontend from connections section.

But by default, these configuration files can be used to Quick Start the client application. Other than that iotConfig.config file is not the connection configuration, but has some external configuration that can be used by IOR Client.