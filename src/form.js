window.onload = function Loader(){
    document.getElementById('submit-btn').addEventListener('click', submitForm);
    
    function formData(){
        let data = {};
        let form = document.getElementById('student-registration');
        for(let el of form.elements){
            data[el.title] = el.value;
        }
        return data;
    }

     /* POST using the fetch call */
     function postFetch(){
        let order = formData();
        console.log(order);
        console.log("SPACES");
        console.log(JSON.stringify(order));
        let variable = fetch('/postRequest', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
        .then((response) => {
            console.log("response");
            console.log(response);
            return response;
        }, (error) => {
            alert(error.data);
            console.log("error");
            console.log(error);
            return error;
        })
        .then(data => {
            console.log('data');
            console.log(JSON.stringify(data));
            console.log(data);
        });
        console.log("psotes");
        console.log(variable);

    }
        
    function submitForm(){
        let requiredFilled = true;
        let form = document.getElementById("student-registration")
        let unfilled = [];
        form.querySelectorAll("[required]").forEach(function(i) {
            if(!i.value){ 
                unfilled.push(i);
                requiredFilled = false;
                
            } 
        });
        
        if(!requiredFilled){
            let titles = "\n";
            unfilled.forEach(function(i){
                titles += i.title + "\n";
             });
            alert("Some required fields were not filled: " + titles);
        }
        if(requiredFilled){
            let complete = confirm('Complete Registration?');
            if(complete){
                let postResponse = postFetch();
                console.log(postResponse);
            }

        }
    }   
} 
