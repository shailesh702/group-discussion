Meteor.methods({
	addThread : function(msg){
		var thread = {
				content:msg,
				createdAt: new Date()
		};
		Thread.insert(thread);		
	},
	editThread : function(){
		
	}
});

