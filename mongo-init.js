db.createUser({
  user: "test",
  pwd: "1234",
  roles: [
    {
      role: "readWrite",
      db: "test",
    },
  ],
});
