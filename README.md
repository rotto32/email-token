## Email Token Generator

### Getting started

1. Make sure MySQL @5.7 is installed and running on your computer, then run ```mysql -u root < db/schema.sql``` from the root directory of the repo.

2. Run ```npm run build```

3. Run ```npm start```


### About
This application takes in an email address and outputs a token unique to that email address which can then be used in links to authorize users.

### Details
#### Front-end
React, Jest/Enzyme for testing
The front end takes a single input, which on change stores the value in state. When the button is clicked a post request is made to the API to add the email to the database. The response from this post request is added to state as the token and rendered on the page.

#### Server 
Node/Express
Only used a single route in this application, /token. The front-end sends a single post request and the response is the desired token.

I pushed a lot of the functionality of this application to the server side, such as generating the token. This was arbitrary - the token could have been generated on the front-end and posted to the database from there.

#### Database
MySQL
Simple single-table database structure to store email and token along with unique key.

### Considerations

Ultimately this is a microservice that provides convienence, rather than security. Using the token to generate a link would allow anyone with that link to authenticate as that user since there is no verification inhereint in just adding a token to a link based on an email.

I used a SHA-1 npm package to generate the token based on the email primarily for the convienence. However, depending on how the token was processed on the other end of things, one could implement a slightly more secure system by verifying the email address against the stored hash, but again even this wouldn't be that secure. 



### Further Steps





