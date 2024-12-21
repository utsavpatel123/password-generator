
let GenerateButton = document.getElementById("GenerateButton")
let passwordContainer = document.getElementById("passwordContainer")
let copy = document.getElementById("copy")

var flag = true;

// Generate Random Password
GenerateButton.addEventListener("click", function(){
             
    passwordContainer.value = ""

      let uppercase = "QWERTYUIOPLKJHGFDSAZXCVBNM"
      let lowercase = "qwertyuioplkjhgfdsazxcvbnm"
      let number = "12345678910"
      let symbol = "!@#$%^&*()_+=-*/?{}"

     for (let i = 1; i <= 4; i++) {
           
        var rand = uppercase[Math.floor(Math.random() * uppercase.length)]
       passwordContainer.value += rand
       
       var rand = lowercase[Math.floor(Math.random() * lowercase.length)]
       passwordContainer.value += rand
   
       var rand = number[Math.floor(Math.random() * number.length)]
       passwordContainer.value += rand
       
       var rand = symbol[Math.floor(Math.random() * symbol.length)]
       passwordContainer.value += rand
    }
})

// copy Text
copy.addEventListener("click", function(){

    passwordContainer.select();
    document.execCommand("copy");

})




