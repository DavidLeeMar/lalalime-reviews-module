# LalaLime Reviews Module

> A front-end remodel of LuluLemon Reviews Module that has been optimized and stress tested

## Related Projects

  - https://github.com/the-four-loops/lalalime-nav-module
  - https://github.com/the-four-loops/lalalime-main-product-module
  - https://github.com/the-four-loops/lalalime-similar-products-module
  - https://github.com/the-four-loops/lalalime-reviews-proxy


## Table of Contents

1. [Scalability](#Scalability)
2. [Demos](#Demos)
3. [Screenshots](#Screenshots)
4. [Usage](#Usage)

## Scalability

This application utilizes 4 t2-micro instances on AWS EC2. It can handle up to 1350 requests per second with an average response time of 79ms, and an error rate of .1%.

#Four t2-micro instances
![](https://i.imgur.com/z2n71EE.png)

With 1 t2-micro instance, we are only able to achieve 350 requests per second.

#One t2-micro instance
![](https://i.imgur.com/sHAqaon.png)

## Demos

![Alt text](https://i.imgur.com/WgTCMoU.gif)
![Alt text](https://i.imgur.com/fsQ7LVf.gif)
![Alt text](https://i.imgur.com/3Wnatsp.gif)

## Screenshots

![Alt text](https://i.imgur.com/8BAu5rM.png)
![Alt text](https://i.imgur.com/GhqHsPT.png)
![Alt text](https://i.imgur.com/tsQ2wF2.png)
![Alt text](https://i.imgur.com/e7174N7.png)
![Alt text](https://i.imgur.com/gGBEeDu.png)


## Usage

To run the server, run ``` npm start ``` in a terminal window

To seed the database, run ``` npm run seed ``` in another terminal window

To view the review section in a browser, enter http://localhost:3004/ in the address bar

## Requirements



### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
