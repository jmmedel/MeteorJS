Template.mytickets.events({
	'submit .open-ticket-form': function(event){
		var name = event.target.name.value;
        var email = event.target.email.value;
        var subject = event.target.subject.value;
        var department = event.target.department.value;
        var priority = event.target.priority.value;
        var message = event.target.message.value;
        var status = 'new';

         // Insert Ticket
        Tickets.insert({
            name: name,
            email: email,
            subject: subject,
            department: department,
            priority: priority,
            status: status,
            message: message,
            customer: Meteor.userId(),
            createdAt: new Date() // current time
        });

        $('#openTicketModal').modal('hide');
        FlashMessages.sendSuccess('Ticket Submitted');

        return false;
	},
	'click .close-ticket': function(){
		if(confirm("Are you sure?")){
			Tickets.remove(this._id);
			FlashMessages.sendSuccess('Ticket Closed');
			return false;
		}
	}
});