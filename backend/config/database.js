if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://<dbuser>:<dbpassword>@ds161255.mlab.com:61255/mern-stack-todos'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/todos'}
  }