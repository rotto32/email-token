## Email Token Generator

### Getting started

1. Make sure MySQL @5.7 is installed and running on your computer, then run ```mysql -u root < db/schema.sql``` from the root directory of the repo.

2. Run ```npm run build```

3. Run ```npm start```


### About
This application takes in an email address and outputs a token unique to that email address which can then be placed in links to authorize users.

### Details
#### Front-end
React, Jest/Enzyme for testing
The front end takes a single input, which on change stores the value in state. When the button is clicked a token is generated and rendered on the page, and a post request is made to the API to add the email and token to the database. 

#### Server 
Node/Express
Only used a single route in this application, /token. The front-end sends a single post request.

#### Database
MySQL
Simple single-table database structure to store email and token along with unique key.

### Considerations

Ultimately this is a microservice that provides convienence, rather than security. Using the token to generate a link would allow anyone with that link to authenticate as that user since there is no verification inhereint in just adding a token to a link based on an email.

I used a SHA-1 npm package to generate the token based on the email primarily for the convienence. However, depending on how the token was processed on the other end of things, one could implement a slightly more secure system by verifying the email address against the stored hash, but again even this wouldn't be that secure. 

Another issue with this microservice is data duplication. Currently there is no system in place to keep duplicates from being generated in the database if the same email is submitted multiple times. One way around this is to send a get request to the api with the token, verify if the the token exists, then go back to the front end and send the post request if the token doesn't already exist. However this strikes me as inelegant. A better option would to be to push this consideration to the database side, and just not create the record if it already exists, especially since the token is created on the front end anyway, and as far as the user is concerned there is no UX difference between a successful or unsuccessful post. This is where I think MySQL is limited, because there is no way to control an INSERT query in MySQL based on whether or not a record exists, unlike other databases. (For example PostgreSQL has an ON CONFLICT clause that would simplify this whole matter.) Currently if you build a MySQL table to have a unique field (in this case, the token field) and try to perform an INSERT operation with duplicate data then you get an error, and thus if the microservice was structured to avoid data duplication in this way you would recieve errors during perfectly normal operations.

As such I've left it with the wholly unsatisfatory problem of data duplication, considering that the lesser of the two evils given that hardrive memory is cheap, and queries times over networks can vary. 


### Further Steps

Given more time I'd like to come back to this and replace the MySQL database with a PostgreSQL or other database which would have more query control. This would allow me to use a much more compact schema where the token could be the primary key, and would also most likely speed up read query times (not that there are any).





