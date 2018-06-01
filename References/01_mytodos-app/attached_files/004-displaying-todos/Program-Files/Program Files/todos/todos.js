Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
  // Template Helpers
  Template.main.helpers({
    todos: function(){
      return Todos.find({}, {sort: {createdAt: -1}});
    }
  });
}

if (Meteor.isServer) {
 
}
