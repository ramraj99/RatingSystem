// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveMentee);

// Save Mentee
function saveMentee(e){
  // Get form values
  var Name =document.getElementById('Name').value;
  var Email =document.getElementById('Email').value;
  var Rating =document.getElementById('Rating').value;
  var Comments =document.getElementById('Comments').value;

  if(!validateForm(Name, Rating, Email)){
    return false;
  }

  var mentee = {
      name: Name,
    email: Email,
    rating: Rating,
    comments: Comments
  }

  // Test if mentees is null
  if(localStorage.getItem('mentees') === null){
    // Init array
    var mentees = [];
    // Add to array
    mentees.push(mentee);
    // Set to localStorage
    localStorage.setItem('mentees', JSON.stringify(mentees));
  } else {
    // Get mentees from localStorage
    var mentees = JSON.parse(localStorage.getItem('mentees'));
    // Add mentee to array
    mentees.push(mentee);
    // Re-set back to localStorage
    localStorage.setItem('mentees', JSON.stringify(mentees));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch mentees
  fetchMentees();

  // Prevent form from submitting
  e.preventDefault();
}

// Edit mentees
function editMentees(email){
  // Get mentees from localStorage
  var mentees = JSON.parse(localStorage.getItem('mentees'));
  // Loop through the mentees
  for(var i =0;i < mentees.length;i++){
    if(mentees[i].email == email){
      // Remove from array
      document.getElementById('Name').value=mentees[i].name;
      document.getElementById('Email').value=mentees[i].email;
      document.getElementById('Rating').value=mentees[i].rating;
      document.getElementById('Comments').value=mentees[i].comments;
      mentees.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('mentees', JSON.stringify(mentees));

  // Re-fetch bookmarks
  fetchMentees();
}

function deleteMentees(email){
  // Get mentees from localStorage
  var mentees = JSON.parse(localStorage.getItem('mentees'));
  // Loop through the mentees
  for(var i =0;i < mentees.length;i++){
    if(mentees[i].email == email){
      // Remove from array
      mentees.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('mentees', JSON.stringify(mentees));

  // Re-fetch mentees
  fetchMentees();
}

function showMentees(email){
  // Get mentees from localStorage
  var mentees = JSON.parse(localStorage.getItem('mentees'));
  var k=-1;
  // Loop through the mentees
  for(var i =0;i < mentees.length;i++)
    {
    if(mentees[i].email == email){
      // Remove from array
      k=i;
    }
    }
var menteesResults = document.getElementById('menteesResults');

  // Build output
    menteesResults.innerHTML = '';
    var top="<table style ='width:100% ;text-align:center; border :2px solid #600080; background-color:#b8b894;color:#000099;'><thead><tr><th style='border :2px solid #600080'>Name</th><th style='border :2px solid #600080'>Rating</th><th style='border :2px solid #600080'>Show More/Hide</th><th style='border :2px solid #600080'>Email</th><th style='border :2px solid #600080'>Comments</th><th style='border :2px solid #600080'>Delete Entry</th><th style='border :2px solid #600080'>Edit Entry</th></tr></thead><tbody>";
    var rows="";
    var bottom="</tbody></table>";
    var sort="<div style='text-align:center'><br><button type='button' onclick='sortMentees()'>Sort</button></div>";
    for(var i =0;i < mentees.length;i++)
    {
    var name = mentees[i].name;
    var email = mentees[i].email;
    var rating = mentees[i].rating;
    var comments = mentees[i].comments;
    if(i==k)
    {
    if(rating == 0){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#990000;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="fetchMentees()">Hide</button></td><td style="border :2px solid #600080">'+email+'</td><td style="border :2px solid #600080">'+comments+'</td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="deleteMentees(\''+email+'\')">Delete</button></td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="editMentees(\''+email+'\')">Edit</button></td></tr>';
            }
    if(rating == 1){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ff0000;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="fetchMentees()">Hide</button></td><td style="border :2px solid #600080">'+email+'</td><td style="border :2px solid #600080">'+comments+'</td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="deleteMentees(\''+email+'\')">Delete</button></td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="editMentees(\''+email+'\')">Edit</button></td></tr>';
            }
    if(rating == 2){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ff9933;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="fetchMentees()">Hide</button></td><td style="border :2px solid #600080">'+email+'</td><td style="border :2px solid #600080">'+comments+'</td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="deleteMentees(\''+email+'\')">Delete</button></td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="editMentees(\''+email+'\')">Edit</button></td></tr>';
            }
    if(rating == 3){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ffcc00;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="fetchMentees()">Hide</button></td><td style="border :2px solid #600080">'+email+'</td><td style="border :2px solid #600080">'+comments+'</td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="deleteMentees(\''+email+'\')">Delete</button></td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="editMentees(\''+email+'\')">Edit</button></td></tr>';
            }
    if(rating == 4){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ccff66;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="fetchMentees()">Hide</button></td><td style="border :2px solid #600080">'+email+'</td><td style="border :2px solid #600080">'+comments+'</td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="deleteMentees(\''+email+'\')">Delete</button></td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="editMentees(\''+email+'\')">Edit</button></td></tr>';
            }
    if(rating == 5){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#009900;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="fetchMentees()">Hide</button></td><td style="border :2px solid #600080">'+email+'</td><td style="border :2px solid #600080">'+comments+'</td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="deleteMentees(\''+email+'\')">Delete</button></td>'+
            '<td style="border :2px solid #600080"><button type="button" onclick="editMentees(\''+email+'\')">Edit</button></td></tr>';
            }
    }
    else
    {
    if(rating == 0){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#990000;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 1){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ff0000;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 2){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ff9933;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 3){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ffcc00;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 4){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ccff66;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 5){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#009900;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    }
}
menteesResults.innerHTML=top+rows+bottom+sort;
}

function sortMentees(){
  // Get mentees from localStorage
  var mentees = JSON.parse(localStorage.getItem('mentees'));
  var mentees1 = JSON.parse(localStorage.getItem('mentees'));
  var k=0;
  // Loop through the mentees
  for(var j =0;j <= 5;j++)
  for(var i =0;i < mentees.length;i++){
    if(mentees[i].rating == j){
      // Remove from array puts in new array
      console.log(mentees[i]);
      mentees1.splice(k, 1,mentees[i]);
      k++;
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('mentees', JSON.stringify(mentees1));

  // Re-fetch mentees
  fetchMentees();
}

// Fetch mentees
function fetchMentees(){
  // Get mentees from localStorage
  var mentees = JSON.parse(localStorage.getItem('mentees'));
  // Get output id
  mentees = mentees || [];
  var menteesResults = document.getElementById('menteesResults');

  // Build output
    menteesResults.innerHTML = '';
    var top="<table style ='width:100% ;text-align:center; border :2px solid #600080; background-color:#b8b894;color:#000099;'><thead><tr><th style='border :2px solid #600080'>Name</th><th style='border :2px solid #600080'>Rating</th><th style='border :2px solid #600080'>Show More/Hide</th></thead><tbody>";
    var rows="";
    var bottom="</tbody></table>";
    var sort="<div style='text-align:center'><br><button type='button' onclick='sortMentees()'>Sort</button></div>";
    for(var i =0;i < mentees.length;i++){
    var name = mentees[i].name;
    var email = mentees[i].email;
    var rating = mentees[i].rating;
    var comments = mentees[i].comments;
    if(rating == 0){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#990000;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 1){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ff0000;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 2){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ff9933;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 3){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ffcc00;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 4){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#ccff66;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
    if(rating == 5){
    rows += '<tr><td style="border :2px solid #600080">'+name+
            '</td><td style="border :2px solid #600080 ; background-color:#009900;">'+rating+'</td><td style="border :2px solid #600080"><button type="button" onclick="showMentees(\''+email+'\')">Show More</button></td></tr>';
            }
  }
menteesResults.innerHTML=top+rows+bottom+sort;
}

// Validate Form
function validateForm(Name, Rating , Email){
  if(!Name || !Email || !Rating ){
    alert('Please fill in the form');
    return false;
  }

  if(Rating<0 || Rating>5){
    alert('Please Enter a valid Rating between 0 to 5');
    return false;
  }

  return true;
}
