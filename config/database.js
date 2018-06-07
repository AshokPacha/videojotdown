if ( process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI : 'mongodb://ashok:ashok@ds151169.mlab.com:51169/vidjobprod'}
}else {
    module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev'}
}
