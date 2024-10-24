// 1 
db.getCollection('monument').insertMany([
	{"name": "The Valley of the Kings", "city": "Luxor", "country": "Egypt", "gps": { "lat": 25.746424, "lng": 32.605309 }},
	{"name": "Arc de Triomphe", "city": "Paris", "country": "France", "gps": { "lat": 48.873756, "lng": 2.294946 }},
	{"name": "The Eiffel Tower", "city": "Paris", "country": "France", "gps": { "lat": 48.858093, "lng": 2.294694 }},
	{"name": "Acropolis", "city": "Athens", "country": "Greece", "gps": { "lat": 37.970833, "lng": 23.726110 }},
	{"name": "The Great Wall of China", "city": "Huairou", "country": "China", "gps": { "lat": 40.431908, "lng": 116.570374 }},
	{"name": "The Statue of Liberty", "city": "New York", "country": "USA", "gps": { "lat": 40.689247, "lng": -74.044502 }}
])
// 2       
db.monument.countDocuments({})
// 3 
db.monument.find()
// 4
db.monument.find({name:"The Valley of the Kings"})
db.monument.find({_id:ObjectId("6707ee2d79d0cd5e620c5223")})
// 5
db.monument.find({country:"France"})
// 6
db.monument.updateOne({name:"Arc de Triomphe"},{$set:{name:"Arc de Triomphe de l'Étoile"}})
//
db.monument.insertOne({"name" : "smouha dwla",
    "city" : "Alex",
    "country" : "Egypt",
    "gps" : {
        "lat" : 25.746424,
        "lng" : 32.605309
    }})
// 7    
db.monument.updateMany({},{$set:{"editor":"omar nouh"}})
// 8
db.monument.deleteMany({name:"The Valley of the Kings"})
// 9 
db.monument.deleteMany({country:"France"})
// 10 
db.monument.deleteMany({})

// Qery

// 11
db.monument.insertMany([
	{"name": "Everest","height": 8848,"location": ["Nepal", "China"],"ascents": {"first": {"year": 1953},"first_winter": {"year": 1980},"total": 5656}},
	{"name": "K2","height": 8611,"location": ["Pakistan", "China"],"ascents": {"first": {"year": 1954},"first_winter": {"year": 1921},"total": 306}},
	{"name": "Kangchenjunga","height": 8586,"location": ["Nepal", "India"],"ascents": {"first": {"year": 1955},"first_winter": {"year": 1986},"total": 283}},
	{"name": "Lhotse","height": 8516,"location": ["Nepal", "China"],"ascents": {"first": {"year": 1956},"first_winter": {"year": 1988},"total": 461}},
	{"name": "Makalu","height": 8485,"location": ["China", "Nepal"],"ascents": {"first": {"year": 1955},"first_winter": {"year": 2009},"total": 361}}
])
db.monument.find()
// 12
db.monument.find({name:"Everest"})
// 13
db.monument.find({name:{$nin:["Everest"]}})
db.monument.find({"name": {$ne: "Everest"}})
//14
db.monument.find({name:{$in:["Everest","K2"]}})
db.monument.find({$or:[{name:"Everest"},{name:"K2"}]})
//15
db.monument.find({height:{$gt:8500.0}})
//16
db.monument.find({height:{$gt:8500.0}},{"_id":0,"name":1, "ascents.first_winter":1, "ascents.total":1})
//17
db.monument.find({location:"Nepal"})
//18
db.monument.find({location:{$all:["Nepal","China"]}})
db.monument.find({$and:[{location:"Nepal"},{location:"China"}]})
//19
db.monument.find({"ascents.total":{$gt:1000}})
//20
db.monument.find({},{"name":1,"height":1,"_id":0}).sort({"height": -1}).limit(3)


// Indexes
//21
db.monument.createIndex({"height":-1})
//22
db.monument.find({name:"Everest"}).explain("executionStats")
//23
db.monument.createIndex({"name":1},{unique:true})
//24
db.monument.insertOne({"name": "Everest", "height": 9200,
    "location": ["India"], "ascents": {"first": {"year": 2020}, "first_winter": {"year": 2021}, "total": 2}})
    // fail bec:unique index
//25
db.monument.createIndex({"ascents.total":1})
//26
db.monument.find({"ascents.first_winter.year": {$gt: 1990}, "height": {$lt: 8600}}).sort({"height": -1}).explain("executionStats")
//27
db.monument.createIndex({"ascents.first_winter.year":1,"height":-1})
//28
db.monument.createIndex({"location": 1})
//29
db.monument.getIndexes()

