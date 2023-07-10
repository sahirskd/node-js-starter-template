import bodyParser from 'body-parser'
import compress from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import xss from 'xss-clean'
import hpp from 'hpp'
import http from 'http'
import routes from '../server/routes'


const app = express()
const server = http.createServer(app);

/* Parsing the body of the request and making it available in the request object. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

/* Parsing the cookie header and populating req.cookies with an object keyed by the cookie names.
Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret
so it may be used by other middleware. */
app.use(cookieParser());

/* Compressing the response body. */
app.use(compress());
app.use(methodOverride());

/* Helmet is a collection of 12 smaller middleware functions that set HTTP response headers. */
app.use(helmet());

/* Allowing cross-origin resource sharing. */
app.use(cors());

/* A middleware that cleans user input from any malicious code. */
app.use(xss());

/* A middleware that prevents HTTP parameter pollution attacks. */
app.use(hpp());

/* Telling the server to use the routes defined in the routes.js file. */
app.use('/node/api', routes);

export default server;
