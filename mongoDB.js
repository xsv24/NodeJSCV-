'use strict';

let mongo = require('mongodb').MongoClient;
let assert = require('assert');

let url = 'mongodb://user:password@127.0.0.1/cv';

let query_collection = (db, collection, query) => {
	return new Promise((resolve, reject) => {
		db.collection(collection).find(query).toArray(function(err, items){
			if(err) reject(err);
			resolve(items);
		});
	});
}
let connection = (collection, query) => {
	return new Promise((resolve, reject) => {
		mongo.connect(url, function (err, db){
			assert.equal(null, err);
			if(err) reject(err);
			resolve(query_collection(db, collection, query));
			db.close();
		});	
	});
}
exports.query_collections = (collections, query) => {
	return Promise.all(
		collections.map((item) => {
			return connection(item, query);
		})
	).then((res) => {
		return res.filter((item) =>{
			if(item.length != 0)
				return item;
		});
	});
	
}
exports.query_collection = (collection, query) => {
	return connection(collection, query);
}
