# Identicon API

This project stemmed from the need to include dynamic, default identicons for new users of [UNUM](http://unum.la/). I was inspired by the amazing work of [jdenticon](https://github.com/dmester/jdenticon), a javascript module that allowed the generating of identicons. This project provides a simple interface to that project.

## Use

I strived to make the API as easy to use as possible. Use can look like so:

```html
<img src="https://identicon-api.herokuapp.com/<username>/<size>?format=(svg|png)" alt="">
```

* `username`: This doesn't have to be a username, just any string. Hashing is done server-side using SHA-256.
* `size`: This is the size of the image you would like returned. For now, the API only returns squares, so `size` is any natural number.
* `format`: This is the format you would like the image returned in, svg or png. (Default: svg)

## Contributing

I'd love for you to contribute to the project! Go ahead and submit a pull request and I'll be sure to take a look at it. Here are some ideas to get you started:

* Support for more diverse sizes, though this will have to be through changes to the [dmester/jdenticon](https://github.com/dmester/jdenticon) repo
* Support for different hash functions, specified through the Request body
