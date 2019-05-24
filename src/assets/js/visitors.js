

export const registerVisitor = (nameLastName,arrivalDate,checkIn,visitorRut,host) =>{
  
    firebase.database().ref('visitor/').push({
    name : nameLastName,
    Date : arrivalDate,
    check : checkIn,
    rut : visitorRut,
    host: host,
})
}

export const showVisitors = () =>{
    let post = []; 
    
    firebase.database().ref('visitor/').on('value', (snapshot) =>{
        let counter = 0;
        snapshot.forEach(function (childsnapshot){
            let childData = childsnapshot.val();
            childData.key = Object.keys(snapshot.val())[counter];
            post.push(childData);
            counter++;
        })
    });
        
    //console.log(post);
    return post;
    };