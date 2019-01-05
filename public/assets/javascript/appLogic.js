var currentResponseId
var queryWanted = null
// we need some basic things the user can search for.
var Year = 2010 //or whatever year user enters into chatbot
var searchTerms = {
    inTheaters: "primary_release_date.gte=2014-09-15&primary_release_date.lte=2018-11-29",
    popular: "sort_by=popularity.desc", 
    popularKids: "certification_country=US&certification.lte=PG&sort_by=popularity.desc", 
    bestOfYear: "primary_release_year=" + Year + "&sort_by=popularity.desc",
    bestDramas: "with_genres=18&sort_by=vote_average.desc&vote_count.gte=100",
    bestHorror: "with_genres=27&sort_by=vote_average.desc&vote_count.gte=100",
    bestAction: "with_genres=28&sort_by=vote_average.desc&vote_count.gte=100",
    bestComedies: "with_genres=35&sort_by=vote_average.desc&vote_count.gte=100",
    bestRomanticComedies: "with_genres=10749&sort_by=vote_average.desc&vote_count.gte=100",
    bestCrime: "with_genres=80&sort_by=vote_average.desc&vote_count.gte=100",
    bestAnimation: "with_genres=16&sort_by=vote_average.desc&vote_count.gte=100",
    bestDocumentary: "with_genres=99&sort_by=vote_average.desc&vote_count.gte=100",
    bestFamily: "with_genres=10751&sort_by=vote_average.desc&vote_count.gte=100",
    bestFantasy: "with_genres=14&sort_by=vote_average.desc&vote_count.gte=100",
    bestHistory: "with_genres=36&sort_by=vote_average.desc&vote_count.gte=100",
    bestMusical: "with_genres=10402&sort_by=vote_average.desc&vote_count.gte=100",
    bestMystery: "with_genres=9648&sort_by=vote_average.desc&vote_count.gte=100",
    bestScienceFiction: "with_genres=878&sort_by=vote_average.desc&vote_count.gte=100",
    bestTvMovie: "with_genres=10770&sort_by=vote_average.desc&vote_count.gte=100",
    bestThriller: "with_genres=53&sort_by=vote_average.desc&vote_count.gte=100",
    bestWar: "with_genres=10752&sort_by=vote_average.desc&vote_count.gte=100",
    bestWestern: "with_genres=37&sort_by=vote_average.desc&vote_count.gte=100",
}

$('#rupert-button').on('click', function(event) {
  $('#ruLogo').fadeOut(500).fadeIn(500);
});

