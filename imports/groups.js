
//import { Mongo } from 'meteor/mongo';

//import '../imports/groups.html';
//import '../lib/collection.js';
//import '../shared/method.js';

//Thread = new Mongo.Collection('threads');

Template.body.events({
	"submit .new-post": function(event){
		event.preventDefault();
		var text = event.target.commentbox.value;
		//alert(text);
		Meteor.call("addPost",text);
		var thread = {
				content:text,
				createdAt: new Date()
		};
		Thread.insert(thread);
	}
});

Template.postMessage.helpers({
	'message':function(){
		
		return Thread.find({},{sort : {createdAt:-1} });
	}
});

