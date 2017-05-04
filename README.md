# dockerpkg

> Build and run node apps in small containers using docker and [zeit/pkg](https://github.com/zeit/pkg).


# Introduction

[zeit/pkg](https://github.com/zeit/pkg) is a tool to package a NodeJS project into an executable. The resulting
packages can be used on a system without having to install NodeJS, npm or the project dependencies. 

When used together with a small system like Alpine Linux this can result in simple and minimal Docker images.

This project aims for a very simple workflow to create these small images. It does so by separating the process of
building and running the container and it provides a simple helper command to run the build. 

# Components

## dockerpkg/builder

The builder image is based on `node:7.9-alpine` and it runs the `pkg` command with some params in the mounted directory.

The result is a generated binary called `app.bin` in the mounted directory (generally this is the dir of you project).

## dockerpkg/runner

The runner images is based on `alpine:3.5` and it is made to run the generated `app.bin` from the `/app` directory.

## dockerpkg cli tool

The `dockerpkg` is a simple script that executes the `docker` command with the right parameters to created a build.
 
It pulls the `dockerpkg/runner` images and makes sure that the working dir is mounted correctly.

# How to use 

Please refer to [dockerpkg-example](https://github.com/dockerpkg/dockerpkg-example) for a working example.

# Credits

- [ZEIT](https://zeit.co) for creating awesome software like [zeit/pkg](https://github.com/zeit/pkg)

# LICENSE

MIT