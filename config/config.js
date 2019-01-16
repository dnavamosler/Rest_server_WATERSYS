/* =========================== /*
           PUERTOS
/* ===========================  */

process.env.PORT = process.env.PORT || 3000

/* =========================== /*
           ENV
/* ===========================  */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

/* =========================== /*
          DB CONNECTION
/* ===========================  */

let urlDb



if(process.env.NODE_ENV === 'dev')
    urlDb = 'mongodb://localhost:27017/water-sys'
else
    urlDb = process.env.MONGO_URI

process.env.URLDB = urlDb

