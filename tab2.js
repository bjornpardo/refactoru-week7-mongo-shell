Last login: Tue May 13 10:19:42 on ttys001
localhost:~ student$ mongo
MongoDB shell version: 2.4.8
connecting to: test
Server has startup warnings: 
Tue May 13 09:22:01.013 [initandlisten] 
Tue May 13 09:22:01.013 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
> use school
switched to db school
> db.students.insert({name: "Bjorn Pardo"})
> db.students.insert({name: "Alan Turing"})
> db.students.insert({name: "Dennis Ritchie"})
> db.school.find()
> db.students.find()
{ "_id" : ObjectId("537246c1abb0e6a2b0a1c297"), "name" : "Bjorn Pardo" }
{ "_id" : ObjectId("537246caabb0e6a2b0a1c298"), "name" : "Alan Turing" }
{ "_id" : ObjectId("537246d1abb0e6a2b0a1c299"), "name" : "Dennis Ritchie" }
> db.students.findOne({name: 'Bjorn Pardo'})
{ "_id" : ObjectId("537246c1abb0e6a2b0a1c297"), "name" : "Bjorn Pardo" }
> db.students.update({name: "Bjorn Pardo"}, {name: "Bj Pardo"})
> db.students.find()
{ "_id" : ObjectId("537246c1abb0e6a2b0a1c297"), "name" : "Bj Pardo" }
{ "_id" : ObjectId("537246caabb0e6a2b0a1c298"), "name" : "Alan Turing" }
{ "_id" : ObjectId("537246d1abb0e6a2b0a1c299"), "name" : "Dennis Ritchie" }
> db.students.remove({name : "Bj Pardo"})
> db.students.find()
{ "_id" : ObjectId("537246caabb0e6a2b0a1c298"), "name" : "Alan Turing" }
{ "_id" : ObjectId("537246d1abb0e6a2b0a1c299"), "name" : "Dennis Ritchie" }
> db.students.remove()
> db.students.find()
> use zoo
switched to db zoo
> db.animals.insert({name: 'horse', diet: 'herbivore'})
^[db.animals.insert({name: 'lion', diet: 'carnivore'})
> db.animals.find()
{ "_id" : ObjectId("537247e7abb0e6a2b0a1c29a"), "name" : "horse", "diet" : "herbivore" }
{ "_id" : ObjectId("537247f9abb0e6a2b0a1c29b"), "name" : "lion", "diet" : "carnivore" }
> db.visitors.insert({name: 'Bjorn', favorite animal: 'lion'})
Tue May 13 10:29:21.469 SyntaxError: Unexpected identifier
> db.visitors.insert({name: 'Bjorn', favoriteanimal: 'lion'})
> db.visitors.insert({name: 'Sarah', favoriteanimal: 'horse'})
> db.visitors.find()
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "name" : "Bjorn", "favoriteanimal" : "lion" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "name" : "Sarah", "favoriteanimal" : "horse" }
> db.visitors.findOne({name: 'Bjorn'}).favoriteanimal
lion
> db.visitors.find().favoriteanimal
> db.visitors.find({favoriteanimal:1})
> db.visitors.find({favoriteanimal {$exists: true}})
Tue May 13 10:48:27.577 SyntaxError: Unexpected token {
> db.visitors.find( { favoriteanimal: { $exists: true } } )
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "name" : "Bjorn", "favoriteanimal" : "lion" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "name" : "Sarah", "favoriteanimal" : "horse" }
> db.visitors.update({ name: 'Bj' }, { $set: { favoriteanimal: 'bear' }})
> db.visitors.find( { favoriteanimal: { $exists: true } } )
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "name" : "Bjorn", "favoriteanimal" : "lion" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "name" : "Sarah", "favoriteanimal" : "horse" }
> db.visitors.update({ name: 'Bj' }, { $unset: { favoriteanimal: 'bear' }})
> db.visitors.find( { favoriteanimal: { $exists: true } } )
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "name" : "Bjorn", "favoriteanimal" : "lion" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "name" : "Sarah", "favoriteanimal" : "horse" }
> db.visitors.update({ name: 'Bjorn' }, { $set: { favoriteanimal: 'bear' }})
> db.visitors.find( { favoriteanimal: { $exists: true } } )
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "name" : "Bjorn", "favoriteanimal" : "bear" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "name" : "Sarah", "favoriteanimal" : "horse" }
> db.visitors.update({ favoriteanimal: { $exists: true } }, { $set: { $type: 4 }})
Modified field name may not start with $
> db.visitors.update({ favoriteanimal: { $exists: true } }, { favoriteanimal: { $type: 4 }})
Tue May 13 11:16:23.755 field names cannot start with $ [$type] at src/mongo/shell/collection.js:147
> db.visitors.find( { favoriteanimal: { $exists: true } } )
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "name" : "Bjorn", "favoriteanimal" : "bear" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "name" : "Sarah", "favoriteanimal" : "horse" }
> db.visitors.find( { favoriteanimal: { $exists: true } } )
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "name" : "Bjorn", "favoriteanimal" : "bear" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "name" : "Sarah", "favoriteanimal" : "horse" }
> db.visitors.update({}, { $set: {favoriteanimals: []}}, {multi:true}
... db.visitors.update({ favoriteanimal: { $exists: true } }, { favoriteanimal: { $type: 4 }})^C

> db.visitors.update({}, { $set: {favoriteanimal: []}}, {multi:true}
... ^C

> db.visitors.update({}, { $set: {favoriteanimal: []}}, {multi:true})
> db.visitors.find()
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "favoriteanimal" : [ ], "name" : "Bjorn" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "favoriteanimal" : [ ], "name" : "Sarah" }
> db.visitors.update({name: 'Bjorn'}, { $push: {favoriteanimal : 'bear', 'lion'}})
Tue May 13 11:31:07.509 SyntaxError: Unexpected token }
> db.visitors.update({name: 'Bjorn'}, { $push: {favoriteanimal : 'bear'}})
> db.visitors.find()
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "favoriteanimal" : [ ], "name" : "Sarah" }
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "favoriteanimal" : [  "bear" ], "name" : "Bjorn" }
> db.visitors.update({name: 'Bjorn'}, { $push: {favoriteanimal : 'lion'}})
> db.visitors.find()
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "favoriteanimal" : [ ], "name" : "Sarah" }
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "favoriteanimal" : [  "bear",  "lion" ], "name" : "Bjorn" }
> db.visitors.update({name: 'Sarah'}, { $push: {favoriteanimal : 'dog'}})
> db.visitors.update({name: 'Sarah'}, { $push: {favoriteanimal : 'bunny'}})
> db.visitors.find()
{ "_id" : ObjectId("537248e6abb0e6a2b0a1c29c"), "favoriteanimal" : [  "bear",  "lion" ], "name" : "Bjorn" }
{ "_id" : ObjectId("537248f9abb0e6a2b0a1c29d"), "favoriteanimal" : [  "dog",  "bunny" ], "name" : "Sarah" }
> use country
switched to db country
> db.countries.findOne( {name: 'Albania'} )
{
	"_id" : ObjectId("53725acb55246216e1e6dd33"),
	"name" : "Albania",
	"frenchName" : "Albanie",
	"localName" : "Shqiperia",
	"region" : "Southern Europe"
}
> db.countries.sort( {name: -1} )
Tue May 13 11:51:57.157 TypeError: Property 'sort' of object country.countries is not a function
> db.countries.find().sort( {name: -1} )
{ "_id" : ObjectId("53725acb55246216e1e6dd7c"), "name" : "frenchName Southern Territories", "frenchName" : "Terres Australes Françaises", "localName" : "Terres Australes et Antarctiques Françaises", "region" : "Southern South America, Antarctic" }
{ "_id" : ObjectId("53725acb55246216e1e6dd7b"), "name" : "frenchName Polynesia", "frenchName" : "Polynésie Française", "localName" : "Polynésie Française", "region" : "Polynesia, Oceania" }
{ "_id" : ObjectId("53725acb55246216e1e6dd7a"), "name" : "frenchName Guiana", "frenchName" : "Guyane Française", "localName" : "Guyane", "region" : "Northern South America" }
{ "_id" : ObjectId("53725acb55246216e1e6de1e"), "name" : "Zimbabwe", "frenchName" : "Zimbabwe", "localName" : "Zimbabwe", "region" : "Eastern Africa" }
{ "_id" : ObjectId("53725acb55246216e1e6de1d"), "name" : "Zambia", "frenchName" : "Zambie", "localName" : "Zambia", "region" : "Eastern Africa" }
{ "_id" : ObjectId("53725acb55246216e1e6de1c"), "name" : "Yemen", "frenchName" : "Yémen", "localName" : "Al Yaman", "region" : "Arabian Peninsula, Middle East" }
{ "_id" : ObjectId("53725acb55246216e1e6de1b"), "name" : "Western Sahara", "frenchName" : "Sahara Occidental", "localName" : "Aṣ-Ṣaḥrā’ al-Gharbīyah", "region" : "Northern Africa" }
{ "_id" : ObjectId("53725acb55246216e1e6de1a"), "name" : "Wallis and Futuna Islands", "frenchName" : "Wallis et Futuna", "localName" : "Wallis et Futuna", "region" : "Polynesia, Oceania" }
{ "_id" : ObjectId("53725acb55246216e1e6de19"), "name" : "Virgin Islands (U.S.)", "frenchName" : "Îles Vierges des États-Unis", "localName" : "Virgin Islands", "region" : "Lesser Antilles, Caribbean" }
{ "_id" : ObjectId("53725acb55246216e1e6de18"), "name" : "Virgin Islands (British)", "frenchName" : "Îles Vierges Britanniques", "localName" : "", "region" : "Lesser Antilles, Caribbean" }
{ "_id" : ObjectId("53725acb55246216e1e6de17"), "name" : "Vietnam", "frenchName" : "Viêt Nam", "localName" : "Viet Nam", "region" : "South-East Asia" }
{ "_id" : ObjectId("53725acb55246216e1e6de16"), "name" : "Venezuela", "frenchName" : "Venezuela", "localName" : "Venezuela", "region" : "Northern South America" }
{ "_id" : ObjectId("53725acb55246216e1e6de15"), "name" : "Vatican City State (Holy See)", "frenchName" : "Saint-Siège (État de la Cité du Vatican)", "localName" : "Status Civitatis Vaticanæ", "region" : "Southern Europe within Italy" }
{ "_id" : ObjectId("53725acb55246216e1e6de14"), "name" : "Vanuatu", "frenchName" : "Vanuatu", "localName" : "Vanuatu", "region" : "Melanesia, Oceania" }
{ "_id" : ObjectId("53725acb55246216e1e6de13"), "name" : "Uzbekistan", "frenchName" : "Ouzbékistan", "localName" : "Uzbekiston Respublikasi", "region" : "Central Asia" }
{ "_id" : ObjectId("53725acb55246216e1e6de12"), "name" : "Uruguay", "frenchName" : "Uruguay", "localName" : "Republica Oriental del Uruguay", "region" : "Central East South America" }
{ "_id" : ObjectId("53725acb55246216e1e6de11"), "name" : "United States", "frenchName" : "États-Unis", "localName" : "United States", "region" : "North America" }
{ "_id" : ObjectId("53725acb55246216e1e6de10"), "name" : "United Kingdom", "frenchName" : "Royaume-Uni", "localName" : "United Kingdom", "region" : "Northern Europe" }
{ "_id" : ObjectId("53725acb55246216e1e6de0f"), "name" : "United Arab Emirates", "frenchName" : "Émirats Arabes Unis", "localName" : "Al Imarat al Arabiyah al Muttahidah", "region" : "Arabian Peninsula, Middle East" }
{ "_id" : ObjectId("53725acb55246216e1e6de0e"), "name" : "Ukraine", "frenchName" : "Ukraine", "localName" : "Ukrayina", "region" : "Eastern Europe" }
Type "it" for more
> db.countries.find( { name: /Phil/} ) 
{ "_id" : ObjectId("53725acb55246216e1e6ddda"), "name" : "Philippines", "frenchName" : "Philippines", "localName" : "Pilipinas", "region" : "Southeast Asia" }
> 
