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
    urlDb = 'mongodb://admin:b42da30e@ds159204.mlab.com:59204/water-sys'

process.env.URLDB = urlDb

