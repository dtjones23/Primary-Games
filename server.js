import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import routes from './controllers/index.js';
import session from 'express-session';
import connectSessionSequelize from 'connect-session-sequelize';

const SequelizeStore = connectSessionSequelize(session.Store);
// import helpers from './utils/helpers';
import sequelize from './config/connection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({});

const sess = {
  secret: 'really really deep secret', //  Used to sign the session ID cookie
  cookie: {}, // Holds session cookie options (empty object -> default settings)
  resave: false, // Forces the session to be saved back to the session
  saveUninitialized: true, // Forces uninitialized session to save to store
  
  // Stores session data in a Sequelize-managed database
  store: new SequelizeStore({
    db: sequelize,
    // checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
    // expiration: 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.

  })
};

// Manage user sessions
app.use(session(sess));


// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Route to get game data
app.get('/games')

// Listener
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});