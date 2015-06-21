Meteor.publishComposite('messages', function() {
  return {
    find: function() {
      return MessagesCollection.find({});
    }
  }
});