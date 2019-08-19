require('babel-register')({
    presets: ['react']
})

const express= require('express'),
mongodb = require('mongodb'),
app = express(),
bodyParser = require('body-parser'),
validator = require('express-validator'),
logger = require('morgan'),
errorHandler = require('errorhandler'),
compression = require('compression'),
url = `mongodb+srv://test:<password>@firstone-wgpir.mongodb.net/test?retryWrites=true&w=majority
`,
ReactDOMServer = require('react-dom/server'),
React = require('react')

const Header = React.createFactory(require('./components/header.jsx')),
Footer = React.createFactory(require('./components/footer.jsx')),
MessageBoard = React.createFactory(require('./components/board.jsx'))

mongodb.MongoClient.connect(url, (err, db) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }

    app.set('view engine', 'hbs');
    
    app.use(compression())
    app.use(logger('dev'))
    app.use(errorHandler())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(validator())
    app.use(express.static('public'))

    app.use((req, res, next) => {
        req.messages = db.collection('messages')
        return next()
    })

    app.get('/messages', (req, res, next) => {
        req.messages.find({}, {sort: {_id: -1}}).toArray((err, docs) => {
            if (err) return next(err)
            return res.json(docs)
        })
    })

    app.post('/messages', (req, res, next) => {})

    app.get('/', (req, res, next) => {
        req.messages.find({},
            {sort: {_id:-1}}).toArray((err, docs) => {
                if (err) return next(err)
                res.render('index', {
                    header:ReactDOMServer.renderToString(Header()),
                    footer:ReactDOMServer.renderToString(Footer()),
                    messageBoard:ReactDOMServer.renderToString(MessageBoard({
                        messages: docs
                    })),
                    props: '<script type="text/javascript">var messages='
                    +JSON.stringify(docs)
                    +'</script>'
                })
            })
    })

    app.listen(3000)
})