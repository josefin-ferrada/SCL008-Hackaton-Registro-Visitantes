export const registerVisitor = (nameLastName,arrivalDate,checkIn,visitorRut,host) =>{
    firebase.database().ref('visitor/').push({
      user: user.uid, 
    username: user.displayName,
    name : nameLastName,
    Date : arrivalDate,
    check : checkIn,
    rut : visitorRut,
    host: host,
})
}