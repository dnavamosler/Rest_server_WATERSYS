/* =========================== /*
           PUERTOS
/* ===========================  */

process.env.PORT = process.env.PORT || 3000

/* =========================== /*
           ENV
/* ===========================  */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


/* =========================== /*
          SEED_TOKEN
/* ===========================  */

process.env.SEED_TOKEN = process.env.SEED_TOKEN || process.env.SEED_TOKEN

/* =========================== /*
          CADUCIDAD_TOKEN
/* ===========================  */

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30


/* =========================== /*
          DB CONNECTION
/* ===========================  */

let urlDb

if(process.env.NODE_ENV === 'dev')
    urlDb = 'mongodb://localhost:27017/water-sys'
else
    urlDb = process.env.MONGO_URI

process.env.URLDB = urlDb

