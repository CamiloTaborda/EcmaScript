function newUser (name, age ,country) {
    var name = name || "Camilo";
    var age = age || 23; 
    var country = country || "CO"
    console.log(name, age, country);
}

newUser(); 
newUser("Carlos", 15, "AR");

// ----------------------------------

function newAdmin(name = "Camilo", age = 31, country = "CO"){
     console.log(name,age,country);
}

newAdmin();
newAdmin("Ana", 28, "CH");