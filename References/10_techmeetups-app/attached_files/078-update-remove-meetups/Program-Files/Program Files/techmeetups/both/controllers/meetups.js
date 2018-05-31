MeetupsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('meetups');
  },
  data: {
    meetups: Meetups.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Meetups');
  }
});

MeetupsController.events({
  'submit .add-meetup-form': function(event){
  		var title = event.target.title.value;
        var email = event.target.email.value;
        var topics = event.target.topics.value;
        var type = event.target.type.value;
        var address = event.target.address.value;
        var city = event.target.city.value;
        var state = event.target.state.value;
        var zipcode = event.target.zipcode.value;
        var meetupdate = event.target.meetupdate.value;

        var params = {
        	title: title,
            email: email,
            topics: topics,
            type: type,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            user: Meteor.userId(),
            username: Meteor.user().username,
            meetupdate: meetupdate,
            createdAt: new Date()
        }

        // Insert Meetup
        Meteor.call('addMeetup', params);

        toastr.success('Meetup Added');
        Router.go('/meetups');

        return false;
  }
});
