document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();
                const username=
                document.getElementById("username").value.trim();
                const password=
                document.getElementById("password").value.trim();
                
                if (username === "user" && password === "1234"){
                    window.location.href = "wyredev.html"
                    alert("login successful");
                    } else{
                        alert('Invalid username or password');
                    } 
                
            });