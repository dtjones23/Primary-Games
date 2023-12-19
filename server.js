import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import routes from './controllers/index.js';
// import helpers from './utils/helpers';
import sequelize from './config/connection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({  });

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Listener
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});