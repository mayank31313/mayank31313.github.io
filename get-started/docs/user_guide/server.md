# Server Setup and Configuration

As discuss on [this page](/), control net depends upon 3 Application. On this page we will discuss those 3 Apps in detail.

## The Application Servers

### Control Net Tower

The Server handles all the REST API requests which deals with User, Devices and Connections. The Authentication used is JWT Token Authentication. Using the server api, we can manage user, client and connections.

Click here for [Docker Image](https://hub.docker.com/repository/docker/mayank31313/ior-backend)


### Socket Server (Tunnel Server)

This server uses TCP Sockets to communicate. The server connects client across each other. The server is also responsible for handling the socket message. It uses AES Encryption with the Connection Key, but is partially encrypted means the messages are decrypted at the server side. But this limitation will be removed in the future builds.

Click here for [Docker Image](https://hub.docker.com/repository/docker/mayank31313/socket-server)


### Video Streamer

This server is used create a Video Live Stream from a device to end user, it uses WebRTC behind the scenes. Connecting to the server requires JWT Token which can be created through Control Net Tower and the stream can be watch on the [Control Net Frontend](https://mayank31313.github.io/controlnet/index.html#/) -> Sign In -> Video Streaming (On Left Drawer), for current build you can stream only 1 Device at a time.

Click here for [Docker Image](https://hub.docker.com/repository/docker/mayank31313/video-server)

#### Additional Features

The Streamer can also be used for Computer Vision and Machine Learning can be also implemented. Users can implement CNN architecture as per the use case.