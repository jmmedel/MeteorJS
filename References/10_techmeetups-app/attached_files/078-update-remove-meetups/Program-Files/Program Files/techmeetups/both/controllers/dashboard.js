DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('mymeetups');
  }
});

DashboardController.helpers({
  'mymeetups': function(){
    return Meetups.find({user: Meteor.userId()});
  }
});



DashboardController.events({
 'submit .update-meetup-form': function(event){
      var title = event.target.title.value;
        var email = event.target.email.value;
        var topics = event.target.topics.value;
        var type = event.target.type.value;
        var address = event.target.address.value;
        var city = event.target.city.value;
        var state = event.target.state.value;
        var zipcode = event.target.zipcode.value;
        var meetupdate = event.target.meetupdate.value;
        var id = event.target.id.value;

        var params = {
          title: title,
            email: email,
            topics: topics,
            type: type,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            meetupdate: meetupdate,
            updatedAt: new Date()
        }

        // Insert Meetup
        Meteor.call('updateMeetup', id, params);

        toastr.success('Meetup Updated');
        $('#modal'+id).modal('hide');
        Router.go('/dashboard');

        return false;
  },
  'click .remove-meetup': function(event){
     if (confirm("Are you sure?")) {
            // Delete Meetup
            Meteor.call("removeMeetup", event.currentTarget.id);
            toastr.success('Meetup Removed');
            return false;
        }
        return false;
  }
});
