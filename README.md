#lab1
// -- CRUD, Query and Indexes



// CRUD


// 1- insert the following documents ino a collection, then query to check your result
[
	{"name": "The Valley of the Kings", "city": "Luxor", "country": "Egypt", "gps": { "lat": 25.746424, "lng": 32.605309 }},
	{"name": "Arc de Triomphe", "city": "Paris", "country": "France", "gps": { "lat": 48.873756, "lng": 2.294946 }},
	{"name": "The Eiffel Tower", "city": "Paris", "country": "France", "gps": { "lat": 48.858093, "lng": 2.294694 }},
	{"name": "Acropolis", "city": "Athens", "country": "Greece", "gps": { "lat": 37.970833, "lng": 23.726110 }},
	{"name": "The Great Wall of China", "city": "Huairou", "country": "China", "gps": { "lat": 40.431908, "lng": 116.570374 }},
	{"name": "The Statue of Liberty", "city": "New York", "country": "USA", "gps": { "lat": 40.689247, "lng": -74.044502 }}
]


// 2- count the number of documents in the collection


// 3- view the collection in a two different ways


// 4- fiter the collection to get only "The Valley of the Kings" monument using two different methods (one of them shoud use _id)


// 5- fiter the collection to get only monuments belong to France


// 6- update the name of "Arc de Triomphe" monument to "Arc de Triomphe de l'Étoile", then query to check your result


// 7- Add a new field to the whole collection as the editor of the collection


// 8- delete the "name": "The Valley of the Kings" monument, then query to check your result


// 9- delete all monuments belong to France, then query to check your result


// 10- delete all monuments, then query to check your result 


// ----------------------------------------------------------------------------------
// Query


// 11- insert the following documents ino a collection
[
	{"name": "Everest","height": 8848,"location": ["Nepal", "China"],"ascents": {"first": {"year": 1953},"first_winter": {"year": 1980},"total": 5656}},
	{"name": "K2","height": 8611,"location": ["Pakistan", "China"],"ascents": {"first": {"year": 1954},"first_winter": {"year": 1921},"total": 306}},
	{"name": "Kangchenjunga","height": 8586,"location": ["Nepal", "India"],"ascents": {"first": {"year": 1955},"first_winter": {"year": 1986},"total": 283}},
	{"name": "Lhotse","height": 8516,"location": ["Nepal", "China"],"ascents": {"first": {"year": 1956},"first_winter": {"year": 1988},"total": 461}},
	{"name": "Makalu","height": 8485,"location": ["China", "Nepal"],"ascents": {"first": {"year": 1955},"first_winter": {"year": 2009},"total": 361}}
]


// 12- get the data of "Everest" peak only


// 13- get the data for all peaks except those contain "Everest" peak


// 14- get the data for "Everest" or "K2" peaks only, using two different methods


// - which peaks have height greater then 8500 ?


// 15- repeat the previous query, but only show the the necessary data (name, ascents.first_winter, ascents.total)


// 16- get the data for peaks that is partially located in Nepal 


// 17- get the data for peaks that is located in China, and Nepal, using two differnt methods


// 18- which peaks that have number of successful ascents greater than 1000 ?


// 19- get highest 3 peaks, but only show the the necessary data (name, height)


// ----------------------------------------------------------------------------------
// Indexes

// 20- create index on the height field


// 21- does this query (db.peaks.find({name: "Everest"})) cause a collection scan ? verify your answer


// 22- create unique index on the name field


// 23- does the same query (db.peaks.find({name: "Everest"})) cause a collection scan ? verify your answer


// 24- modeify the last query ((db.peaks.find({name: "Everest"}))) to become a covered query


// 25- insert the following document, check the result, and explain it
// {"name": "Everest", "height": 9200, "location": ["India"], "ascents": {"first": {"year": 2020}, "first_winter": {"year": 2021}, "total": 2}}


// 26- create embedded field index that will be useful filter & sort data using "ascents.total"


// 27- does the following query do index IXSCAN, or COLLSCAN ?
// db.peaks.find({"ascents.first_winter.year": {$gt: 1990}, "height": {$lt: 8600}}).sort({"height": -1})


// 28- can you create a better index to support this query ?


// 29- create a multikey index for this collection


// 30- show all indexes for peaks collection


// 31- drop the hight index using two different methods

#lab2
// -- Aggregation & Relations



// Aggregation


// 1- insert the following documents ino a collection, then query to check your result
[
    {"name": "Seoul", "country": "South Korea", "continent": "Asia", "population": 25.674 },
    {"name": "Mumbai", "country": "India", "continent": "Asia", "population": 19.980 },
    {"name": "Lagos", "country": "Nigeria", "continent": "Africa", "population": 13.463 },
    {"name": "Beijing", "country": "China", "continent": "Asia", "population": 19.618 },
    {"name": "Shanghai", "country": "China", "continent": "Asia", "population": 25.582 },
    {"name": "Osaka", "country": "Japan", "continent": "Asia", "population": 19.281 },
    {"name": "Cairo", "country": "Egypt", "continent": "Africa", "population": 20.076 },
    {"name": "Tokyo", "country": "Japan", "continent": "Asia", "population": 37.400 },
    {"name": "Karachi", "country": "Pakistan", "continent": "Asia", "population": 15.400 },
    {"name": "Dhaka", "country": "Bangladesh", "continent": "Asia", "population": 19.578 },
    {"name": "Rio de Janeiro", "country": "Brazil", "continent": "South America", "population": 13.293 },
    {"name": "São Paulo", "country": "Brazil", "continent": "South America", "population": 21.650 },
    {"name": "Mexico City", "country": "Mexico", "continent": "North America", "population": 21.581 },
    {"name": "Delhi", "country": "India", "continent": "Asia", "population": 28.514 },
    {"name": "Buenos Aires", "country": "Argentina", "continent": "South America", "population": 14.967 },
    {"name": "Kolkata", "country": "India", "continent": "Asia", "population": 14.681 },
    {"name": "New York", "country": "United States", "continent": "North America", "population": 18.819 },
    {"name": "Manila", "country": "Philippines", "continent": "Asia", "population": 13.482 },
    {"name": "Chongqing", "country": "China", "continent": "Asia", "population": 14.838 },
    {"name": "Istanbul", "country": "Turkey", "continent": "Europe", "population": 14.751 }
]


// 2- get the data for the North America continent only


// 3- get the data for the North America, or Asia continent using two different methods


// 4- sort the data in descending order according to the number of population


// 5- sort the data in ascending order according to the number of population for North America continent


// 6- get the distinct continent using two different methods


// 7- get the distinct continent-countery


// 8- get max number of population per continent-countery, and count the number of cites per continent-countery


// 9- view the document in that format { "location" : { "country" : "South Korea", "continent" : "Asia" }, "name" : "Seoul", "population" : 25.674 }


// 10- find the most populated city for each continent in country Asia and North America and return both its name and population. The results should be sorted by the highest population, returning countries with the largest cities first, and you are interested only in countries where the most populated city crosses the threshold of 20 million people


// 11- modify your last query to make the result look like the following:
/*
    "location" : {
        "country" : "Japan",
        "continent" : "Asia"
    },
    "most_populated_city" : {
        "name" : "Tokyo",
        "population" : 37.4
    }
}
*/
