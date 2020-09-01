window.onload = function Loader(){
    if(this.localStorage.length > 0){loadForm(window.localStorage)}

    document.querySelector('#sign-waivers-btn').addEventListener('click', function(){
        console.log('sign waivers');
        document.getElementById('waiver-dialog').showModal();
        setUpWaiver('esig-name1');
        setUpWaiver('esig-name2');
        setUpWaiver('esig-name3');
        document.getElementById('submit-btn').disabled = false;
    });

    document.querySelector('#submit-waivers').addEventListener('click', function(){
        checkWaiverSigs();
        document.getElementById('waiver-dialog').close();   
    });

    document.querySelector('#cancel-waivers').addEventListener('click', function(){
        document.getElementById('waiver-dialog').close();
    });


    document.getElementById('submit-btn').addEventListener('click', function(){
        postXHR();
    });


    function setUpWaiver(id){
        document.getElementById(id).value = document.getElementById('parent-first-name').value + ' '  + document.getElementById('parent-last-name').value
        document.getElementById(id).disabled = true;
    }


    function formData(){
        let data = {};
        let form = document.getElementById('student-registration');
        for(let el of form.elements){
            console.log(el.value);
            
            data[el.id] = el.value;
        }
        return data;
    }

    function postXHR(){
        let order = formData();
        xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://httpbin.org/post', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() { // Call a function when the state changes.
            console.log('STATE CHANGE?');
            // if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            //     // Request finished. Do processing here.
            // }
        }


        // xhr.onload = function(){
        //     printJSON(JSON.parse(xhr.responseText));
        // };
        xhr.send(JSON.stringify(order));
    }


    function checkWaiverSigs(){
        if(document.getElementById('ESig-agreement1').checked && document.getElementById('signature1').value == document.getElementById('esig-name1').value){
            document.querySelector('#liability').checked = true;
            document.querySelector('#liability').disabled = true;
        }

        if(document.getElementById('ESig-agreement2').checked && document.getElementById('signature2').value == document.getElementById('esig-name2').value){
            document.querySelector('#data-release').checked = true;
            document.querySelector('#data-release').disabled = true;
        }

        if(document.getElementById('ESig-agreement3').checked && document.getElementById('signature3').value == document.getElementById('esig-name3').value){
            document.querySelector('#media-release').checked = true;
            document.querySelector('#media-release').disabled = true;
        }

    }




    function loadFrom(local){
        console.log("load Form Data");
    }

}