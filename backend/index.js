const express = require('express');
const mongoose = require('mongoose');
const app = express();
const todos = require('./routes/todos');

var cors = require('cors');
app.use(cors()); //allowing Access-Control-Allow-Origin cors for access from client
const db = require('./config/database');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect(db.mongoURI, {
	//   useMongoClient: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// mongoose.connect(`mongodb://localhost/todos`, { useNewUrlParser: true })
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch(err => console.error('Could not connect to mongodb'))
app.use(express.json());
app.use('/api/todos', todos);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));