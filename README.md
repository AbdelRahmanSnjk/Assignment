## Quote generator
This is a simple back-end application built on node.js.

It fetches random quotes from the endpoint *https://api.quotable.io/quotes/random* and display them in a simple web page.

## How to run the application
### Prerequesites 
- Docker

### Running the application
To run the application, first clone the repository.

Go to the source code and lunch your favorite terminal, and enter:

> docker build -t YOUR_IMAGE_NAME .

Once it is ready and done, you can run the applciation using this command:

> docker run -p 3000:3000 -d YOUR_IMAGE_NAME

You should be able to generate quotes now :)

## Limitations
A couple of limitations that i had faced and decided with couple of decisions:

- In the *quoteButtonScript.js* i wanted to enable to dynamically give the host and the port for the client but i think i was approaching it in a wrong way, so i hardcoded the URL with the port :( 
- There are no profiles nor configurations to supply in the application to run in a different environments, i wanted to make at least the port customizable, but i ran through problems that i couldn't figure out what to do.
- I know that the code can be written in a better way but i believe i don't have the advanced expertise yet to implement it in a better way, hopefully one day :)

##

This was an interesting challenging and assignment, and i learned a lot from it and saw different technology which made me rethink my approach, and i was suprised how ChatGPT is very helpful, it really helped a lot in explaining some stuff and helping me pointing towards the solution ( however it was hallucinating a lot lol).

Whoever reading this, i am open for feedback and if you have anything you would like to add or something i can learn from you, please do reach out !
