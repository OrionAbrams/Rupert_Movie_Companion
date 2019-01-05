# Project-One
first class group assignment

# Synopsis

An app that uses a dialogflow-based chatbot to understand what a user is asking in terms of movies, and then show the movie terms requested using movie posters, plots, and trailers.


# Motivation

We wanted an app that would find movie info and trailers all-in-one without having to go to specific imdb pages or youtube and typing in searches for the trailers. Originally we wanted to include user location and find movies playing nearby, but the movieGlu api stopped working.

# Code

We used Javascript, Jquery, materialize bootstrap, firebase, as well as tmdb (The Movie Database) apis and dialogflow apis.

# README.md

Rupert, welcomes you! Please type a general greeting to queue Rupert response.

- You may search through individual movies by searching for the Movie Title 
- You may search through the top three movies by a specific actor by queuing the search with the word "actor", and then entering the actor's name.
- You may search through movie genres by queuing the search with the word "genre", and then entering the specific genre name (e.g. Horror)
- You may search through popular movies by queuing the search with the word "popular".

**Pseudocode**

Launch Application on document load
User triggers conversation with start phrase
Rupert will respond with greeting
Rupert will ask if the user wants to look up a movie
 ***USER INPUT***
 ***Yes***
   Rupert asks what kind of movie the user likes
     ***USER INPUT: genre***
       ***Genre[i]***
         Rupert will take user entry and return top 10 movies from that genre via TMDb
         Rupert will return response related to search context (e.g. bleghhhh - Vampire/Horror)
           ***if RUPERT INPUT === !correct (e.g USER INPUT: "I don't like these movies")***
             Rupert will return 10 more responses
           ***if USER CLICKS on (RUPERT INPUT).inTheatres***
             Rupert will display movie times at nearestTheater
     Fallback response
 ***No***
   Rupert gets sassy and tells user to find a different chat-bot
 ***Find a theater***
   Rupert will request user location
     User will input location
       User input will feed to movieGlu and search for nearestTheater based on lat/lon
         nearestTheatre will populate movies and movie times
           Clicking on movie time will re-direct to fandango or some shit to buy the ticket
 ***??? (Unrecogized input)*** 
   Fallback response
