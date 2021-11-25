let body=document.querySelector("body");
let form=document.createElement("form");
form.setAttribute("id","form");
form.innerHTML=`
        <hr>  
        <div class="container">
        <div class="rowcol">   
        <div class="form-group col-sm-auto">
        <h1 id="title">Open-Survey</h1>
        <p id="description"><small id="info" class="form-text text-muted">All of the submissions to this form will be appended into a table below and cannot be modified later.</small></p>
        <small id="required">*All fields are Required to be filled</small>  
        </div>
        <div class="form-group col-sm-auto">
            <label for="first-name" >First Name</label>
            <input type="text" id="first-name" class="form-control clear" placeholder="First name" required="true"><br>
            <label for="last-name" >Last Name</label>
            <input type="text" id="last-name" class="form-control clear" placeholder="Last name" required="true"><br>
            <label for="gender" id="gender">Gender</label> <br>
            <label for="male">Male</label><input type="radio" id="male" name="gender">
            <label for="female">Female</label><input type="radio" id="female" name="gender">
        
        </div>
        <div class="form-group col-sm-auto">
            <label for="adderss">Address</label><br>
            <textarea  name="address" id="address" class="clear" cols="60" rows="5" placeholder="Address" required="true"></textarea> <br>
            <label for="state">state</label>
            <input type="txt" id="state" class="form-control clear" placeholder="State" required="true"><br>
            <label for="country">Country </label>
            <input type="txt" id="country" class="form-control clear" placeholder="County" required="true"><br>
            <label for="pincode">Pin Code </label>
            <input type="text" id="pincode" class="form-control clear" placeholder="Pincode"  required="true">
        </div>
        <div class="form-group col-sm-auto">
            <label class="food icecream" for="choice-of-food" id="food-choice">Choice of Food</label><br>
            <label class="food" for="South-indian">South-Indian</label><input type="checkbox" id="South-indian">
            <label class="food" for="North-indian">North-Indian</label><input type="checkbox" id="North-indian">
            <label class="food" for="italian">Italian</label><input type="checkbox" id="italian">
            <label class="food" for="mexican">Mexican</label><input type="checkbox" id="mexican">
            <label class="food" for="desserts">Desserts</label><input type="checkbox" id="desserts">
        </div>
        <div class="form-group col-sm-auto">
            <button type="button" id="submit" class="btn btn-primary btn-sm" onclick="add()">Submit</button>
        </div>
        <div id="alerts" class="form-group five col-sm-auto"></div>
        <hr>
        <div class="form-group col-sm-auto">
            <table class="table m-2" id="table">
                <thead>
                </tr>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Pincode</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Gender</th>
                            <th>Food-Choices</th>
                          </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
        </div>
    </div> 
</div> 
`;
body.appendChild(form);


function add(){
    //Featching the input values
    var table=document.getElementById("table");
    var firstname=document.getElementById("first-name").value;
    var lastname=document.getElementById("last-name").value;
    var lastname=document.getElementById("last-name").value;
    var address=document.getElementById("address").value;
    var pincode=document.getElementById("pincode").value;
    var state=document.getElementById("state").value;
    var country=document.getElementById("country").value;
    var gender="gender"
    var foodchoice=[];

    //checking Radio buttons
    if(document.getElementById("male").checked){
         gender="Male";
        document.getElementById("male").checked=false;
    }
    if(document.getElementById("female").checked){
        gender="Feale";
       document.getElementById("female").checked=false;
    }
    if(document.getElementById("South-indian").checked){
        foodchoice.push("South-indian")
        document.getElementById("South-indian").checked=false;
    }
    if(document.getElementById("North-indian").checked){
        foodchoice.push("North-indian")
        document.getElementById("North-indian").checked=false;
    }
    if(document.getElementById("italian").checked){
        foodchoice.push("Italian")
        document.getElementById("italian").checked=false;
    }
    if(document.getElementById("mexican").checked){
        foodchoice.push("Mexican")
        document.getElementById("mexican").checked=false;
    }
    if(document.getElementById("desserts").checked){
        foodchoice.push("Desserts")
        document.getElementById("desserts").checked=false;
    }
 // Checking all fields are filled or not
 if(firstname&& lastname && address && pincode && state && country &&(gender!=="gender")&& foodchoice[0]){
   
    //Inserting rows cols 
   var row = table.insertRow();
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   var cell7 = row.insertCell(6);
   var cell8 = row.insertCell(7);

   // Assigning Data to the collumns
   cell1.innerHTML = firstname;
   cell2.innerHTML = lastname;
   cell3.innerHTML=address;
   cell4.innerHTML=pincode;
   cell5.innerHTML=state;
   cell6.innerHTML=country;
   cell7.innerHTML=gender;
   cell8.innerHTML=foodchoice;

   // Clearing all the input fields values
   var cl=document.getElementsByClassName("clear");
      for(let i=0; i<cl.length;i++){
          cl[i].value="";
      }
 }
 else{
    var alerts=document.getElementById("alerts");
    var div=document.createElement("div");
    div.setAttribute("class","alert alert-danger");
    div.setAttribute("role","'alert");
    div.innerText="All Fields are Mandatory!!";
    alerts.appendChild(div);
 }



}
