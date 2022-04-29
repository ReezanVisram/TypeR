![TypeR Logo](https://github.com/ReezanVisram/TypeR/blob/master/client/public/favicon.ico)

# TypeR

A hub for custom mechanical keyboard components. Data scraped daily from many major component retailers and compiled into one site, with price-over-time graphs and recommendations to help inform your purchase.

## Services

TypeR consists of three major services:

1. The Frontend
2. The Backend
3. The Scraper

The frontend is what the user interacts with, while the backend supplies the frontend with all of the necessary data. The scraper is unique in that it does not interact with the frontend nor the backend directly - instead it runs once a day to manage the data in the database, which is then fetched by the server when the frontend requests data.

## Technologies

-   React (_TypeScript_)
    -   React-Query, Material UI
-   Express (_TypeScript_)
    -   TypeORM
-   Python
    -   requests, ponyORM
-   MySQL
-   Docker

## Visit [TypeR](http://typer.reezanvisram.com) to start building your custom keyboard today!

The frontend and backend of TypeR are hosted on Heroku, while the scraper and database are hosted on my personal server.

## Motivations (Why build TypeR?)

I have been interested in custom mechanical keyboards for some time now, but due to the small size and specialized nature of the hobby, sourcing components to build these custom keyboards is difficult.  
Now, with TypeR, there is only one website that anyone who wants to built custom keyboards needs to go to.
