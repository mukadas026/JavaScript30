// navigator.geolocation.getCurrentPosition((value) => console.log(value), (err) => console.log(err))

const geolocation = navigator.geolocation

geolocation.getCurrentPosition(value => console.log(value), err => console.error(err.message))
