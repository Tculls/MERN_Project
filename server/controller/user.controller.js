register: (req, res) => {
    const {User} = require("./../model/user.model")
    
    User.create(req.body)
      .then(user => {
          res.json({ msg: "success!", user: user });
      })
      .catch(err => res.json(err));
  }