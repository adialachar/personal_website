import Image1 from './../assets/images/cheaterBeater.png'
import Image2 from './../assets/images/baut.png'
import Image3 from './../assets/images/stockOverflow.png'
import Image4 from './../assets/images/toor.png'
import Image5 from './../assets/images/joyride.png'

const data = [
  {
    title: 'Cheater Beater',
    website: 'https://example.com',
    description: ` Cheater Beater is a full-stack web app that uses Devpost submissions and GitHub to detect hackathon submission fraud.`,
    image: Image1,
    videodemo: `<a href="https://www.youtube.com/watch?v=THY7hdgH530">Video Demo</a>`,
    extended: "Cheaterbeater takes devpost links, scrapes them with Cheerio.js, and then uses a code differentiation algorithm to check whether a code snippet has been used in a previous hackathon submission. It is important to remember that people are not computers, and that our app does not make a definitive statment about a project, but advises hackathon judges, who have limited time on where to take a second look.",
    newsarticle: `<a href="https://newsroom.ucla.edu/stories/uclas-virtual-hackathon-draws-more-than-1-000-students-to-develop-tech-for-l-a">News Article mentioning our project</a>`
    // backend: "Express.js",
    // frontend: "React",
    // misc1: "Google Compute Engine",
    // misc2: "Google MemoryStore"
  },
  {
    title: 'Baut',
    website: 'https://example.com',
    description: ` Baut is a chatbot that helps recommend you songs and movies based on your relative feelings and personal lifestyle.`,
    image: Image2,
    extended: "Baut won first prize at GEICO's Hacktivates Hackathon 2019. Baut recieves user input and forwards it to an OpenAIGPT2 pretrained model. When prompted for a music request, Baut uses spotify's API to find music with similar traits. When prompted for a movie request, Baut uses SVM with the Open Movie database to make a recommendation ",
    newsarticle: `<a href="https://www.nasdaq.com/press-release/uc-riverside-victorious-in-geicos-first-hacktivates-hackathon-2019-11-22">News Article mentioning our project</a>`
    // backend: "Flask",
    // frontend: "React",
    // misc1: "Jupyter Notebook",
    // misc2: "OpenAIGPT2"
  },
  {
    title: 'Stock Overflow',
    website: 'https://example.com',
    description: ` Stock Overflow is a full-stack web application that uses news data to predict changes in stock prices.`,
    image: Image3,
    videodemo: `<a href= https://www.youtube.com/watch?v=YMJh-efLch4>Video Demo</a>`,
    extended: "This was my senior design project. My team and I wanted to predict whether financial news has any effect of the price of a stock. Stock Overflow used Bloomberg and Reuters financial news articles from 2006 to 2013 and took the stock price before and after the news article was published, while also collecting several other datapoints about the stock and the news article. We then created a Logistic Regression model with our data that was able to predict whether a stock would go up or down in the next 24 hours that was correct 77% of the time. At the end of our project, we found that financial news has very little to do with whether a stock goes up or down."
  },
  {
    title: 'Toor',
    website: 'https://example.com',
    description: ` Toor enables users to submit their own audio tours of the places they love, and we allow them to listen to other user submissions as well.`,
    image: Image4,
    extended: "We built the front-end using React, and back-end with multiple REST API endpoints using Flask. Flask then uses SQLAlchemy, an ORM to submit records to the SQLite3 database and query data to and from. The audio files are stored in Google Cloud Firebase database. The front end is also hosted on Firebase."
  },
  {
    title: 'Joyride',
    website: 'https://example.com',
    description: ` Joyride finds the fastest path to a destination given multiple stops.`,
    image: Image5,
    extended: "Joyride uses an implementation similar to the Traveling Salesman problem to figure out the fastest route between a set start and end point. The front end is built with React, while the backend uses a Flask server. Because the algorithm is exponential, we limited the number of passengers to 4."
  },
]

export default data
