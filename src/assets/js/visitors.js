

export const registerVisitor = (nameLastName,arrivalDate,checkIn,visitorRut,host, namePhoto) =>{
  
    firebase.database().ref('visitor/').push({
    name : nameLastName,
    Date : arrivalDate,
    check : checkIn,
    rut : visitorRut,
    host: host,
    photo: namePhoto
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

 export const createAccount = (email, password, fullName) => {
        let user = firebase.auth().currentUser;
       
           firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
               // Handle Errors here.
               
               var errorCode = error.code;
               var errorMessage = error.message;
               alert(errorMessage);
               // ...
               firebase.database().ref('userInfo/'+ user.uid).set({
		 
                fullnameUser: fullName,
                photoUser: "http://www.xeus.com/wp-content/uploads/2014/09/One_User_Orange.png"
                
                });
           })
 }