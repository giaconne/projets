/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
//import LandingsController from '../app/controllers/auth/landings_controller.js'
import RegistrerController from '../app/controllers/auth/registrer_controller.js';
//import { HttpContext } from "@adonisjs/core/http";

const tweets = [
  {
    id: 1,
    name: 'CNN',
    username: '@CNN',
    tweetAvatar: 'images/tweet-profile-photo.png',
    date: '7m',
    text: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    comments: 57,
    retweets: 144,
    likes: 184,
    shares: 0,
    verified: true
  },
  {
    id: 2,
    name: 'The New York Times',
    username: '@nytimes',
    date: '2h',
    tweetAvatar: 'images/nytimes-avatar.png',
    text: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.',
    image: 'images/tweet-image.png',
    comments: 19,
    retweets: 48,
    likes: 484,
    shares: 0,
    verified: true
  },
  {
    id: 3,
    name: 'Tweeter',
    date: 'Oct 29',
    username: '@twitter',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'BIG NEWS lol jk still Twitter' ,
    comments: "6.8K",
    retweets: "36.6K",
    likes: "267.1K",
    shares: 0,
    verified: true

  },
  {
    id: 4,
    name: 'Tweeter',
    date: 'Oct 04',
    username: '@twitter',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'hello literally everyone' ,
    comments: "116.7K",
    retweets: "785.5K",
    likes: "3.3M",
    shares: 0,
    verified: true

  },
  {
    id: 5,
    name: 'Twitter',
    username: '@twitter',
    date: '04 Oct',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'hello literally everyone',
    image: 'images/tweet-image.png',
    comments: 19,
    retweets: 48,
    likes: 484,
    shares: 0,
    verified: true

  },
];

router.on('/').render('pages/landing')


router

  .group(() => {
    router.get('/register', [RegistrerController, 'show']).as('register.show')
    router.post('/register', [RegistrerController, 'tweets']).as('register.tweets')
})
.as('auth')

// router.get('/', async (ctx: HttpContext) => {
//   return ctx.response.redirect().toRoute('home')
// })



//Router pour afficher la page landing 
router.get('/home', async ({ view }) => {
  return view.render('pages/home')
}).as('home')


//Router pour la page login
router.get('/login', async ({ view }) => {
  return view.render('pages/login')
}).as('login')

// router.post('/register', 'AuthController.register')

// //Route ppour créer un nouveau tweet
// router.post('/tweets', 'TweetsController.store').as('tweets.store')

//Route lié à l'authentification
// router.group(() => {
//   router.post('login', 'Auth/AuthenticationController.login')
//   router.post('register', 'Auth/AuthenticationController.register')
//   router.get('me', 'Auth/AuthenticationController.me').middleware(['auth'])
// }).prefix('api')