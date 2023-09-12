function formvalidation()
            {
                //keeping values of input fields of form in variables
                var name = document.forms["contactusform"]["name"].value;
                var email = document.forms["contactusform"]["email"].value;
                var gender = document.forms["contactusform"]["genderDetails"].value;
                var message = document.forms["contactusform"]["message"].value;

                //alert(messageDetails); 
                //Checking if the fields are empty or not
                if (name == "" || email == "" || message == "")
                {
                    alert("Empty fields detected !!! Please enter values in the empty fields");
                }
                else
                {
                    alert("Thankyou for your feedback !!!");
                }
            }