function SubForm (){
    document.querySelector('#reset').innerHTML = 'Submitting...';
    $.ajax({
        url:'https://api.apispreadsheets.com/data/16s22/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function success(){
          
          document.getElementById('msg').innerHTML = "Submitted Successfully";
          document.getElementById('msg').style.color='Green';

          document.querySelector('#reset').innerHTML = 'Submitted';
          document.getElementById("reset").disabled = true;
          document.getElementById('reset').style.backgroundColor='Green';
          document.getElementById("reset").value="Done";
          document.getElementById("myForm").reset();
          
          
          
          
        },
        error: function error(){
          document.getElementById('msg').innerHTML = "hmmm sm sm wrong";
          location.reload();
          setTimeout("location.href = 'https://tinkerhub.org/';",1500);
        }
    });
} 


