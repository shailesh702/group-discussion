import { Mongo } from 'meteor/mongo';

Thread = new Mongo.Collection('threads');
/*
Thread.allow({
	insert : function(){
		return true;
	},
	update : function(){
		return true;
	},
	remove : function(){
		return true;
	}
});
*/