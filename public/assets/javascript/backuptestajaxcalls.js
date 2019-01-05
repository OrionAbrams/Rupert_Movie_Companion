$.ajax({
      url:  "https://api.themoviedb.org/3/movie/now_playing?api_key=2ed91169ed8d33d4c63c2dd7b3177958&sort_by=popularity.desc",
      method: "GET"
  }).then(function (response) {
      console.log(response)
      for (var i = 0; i < response.results.length; i++) {
          var name = response.results[i].original_title
          console.log(name)
      }
  });

  if (response.queryResult.intent.displayName === "Popular") {
    queryWanted = searchTerms.popular
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Popular Kids") {
    queryWanted = searchTerms.popularKids
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best of Year") {
    queryWanted = searchTerms.bestOfYear
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Action") {
    queryWanted = searchTerms.bestAction
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Animation") {
    queryWanted = searchTerms.bestAnimation
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Comedy") {
    queryWanted = searchTerms.bestComedies
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Crime") {
    queryWanted = searchTerms.bestCrime
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Documentary") {
    queryWanted = searchTerms.bestDocumentary
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Drama") {
    queryWanted = searchTerms.bestDramas
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Family") {
    queryWanted = searchTerms.bestFamily
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Fantasy") {
    queryWanted = searchTerms.bestFantasy
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best History") {
    queryWanted = searchTerms.bestHistory
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Horror") {
    queryWanted = searchTerms.bestHorror
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Musical") {
    queryWanted = searchTerms.bestMusical
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Mystery") {
    queryWanted = searchTerms.bestMystery
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Romantic Comedy") {
    queryWanted = searchTerms.bestRomanticComedies
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Sci-Fi") {
    queryWanted = searchTerms.bestScienceFiction
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Thriller") {
    queryWanted = searchTerms.bestThriller
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best War") {
    queryWanted = searchTerms.bestWar
    movieSearch(queryWanted)
}
if (response.queryResult.intent.displayName === "Best Western") {
    queryWanted = searchTerms.bestWestern
    movieSearch(queryWanted)
}