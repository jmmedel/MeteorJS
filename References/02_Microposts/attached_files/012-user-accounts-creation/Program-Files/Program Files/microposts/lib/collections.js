// Profile Images Collection
ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages");