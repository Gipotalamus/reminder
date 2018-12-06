const app = require('./routes');
const db = require('./db/database');
const dbUrl =  process.env.MONGODB_URI || 'mongodb://localhost/reminder';
const port = process.env.PORT || 1234;

db.connect(dbUrl)
	.then(() => {			
		const server = app.listen(port, () => console.log(`listen on port ${port}`));		
    })
    .catch(err => {
        console.error('Database connection error')
    });



