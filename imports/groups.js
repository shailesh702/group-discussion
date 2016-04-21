
/*Template.group.text=function(event){
	var text = event.target.commentbox.value(); 
	return text;
};*/
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
	},
	'count':function(){
		return Thread.find().count();
	}
});

Template.postMessage.events({
	'click #delete' : function(){
		Thread.remove(this._id);
	},
	'click #edit' :function(){
		//event.target.commentbox.value = "hello";
		//text = "hello";
	}
});

