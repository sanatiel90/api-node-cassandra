//importando libs (sitaxe es6)
import express from 'express'
import bodyParser from 'body-parser'
import cassandra from 'cassandra-driver'
import morgan from 'morgan'
import cors from 'cors'

//instanciando express (const:sintaxe es6)
const app = express()

//usando middlewares das libs
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

