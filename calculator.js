 function add()
        {
            var x=document.getElementById("num1").value;
            var y=document.getElementById("num2").value;
            var z=parseInt(x)+parseInt(y);
            document.getElementById("result").innerHTML=+z;
        }
        function sub()
        {
            var x=document.getElementById("num1").value;
            var y=document.getElementById("num2").value;
            var z=parseInt(x)-parseInt(y);
            document.getElementById("result").innerHTML=+z;
        }    
        function mul()
        {
            var x=document.getElementById("num1").value;
            var y=document.getElementById("num2").value;
            var z=parseInt(x)*parseInt(y);
            document.getElementById("result").innerHTML=+z;
        }
        function div()
        {
            var x=document.getElementById("num1").value;
            var y=document.getElementById("num2").value;
            var z=parseInt(x)/parseInt(y);
            document.getElementById("result").innerHTML=+z;
        }
        function square()
        {
            var x=document.getElementById("num1").value;
            var z=(parseInt(x))*(parseInt(x));
            document.getElementById("result").innerHTML=+z;
        }
        function cube()
        {
            var x=document.getElementById("num1").value;
            var z=(parseInt(x))*(parseInt(x))*(parseInt(x));
            document.getElementById("result").innerHTML=+z;
        }
        function allclear()
        {
            document.getElementById("num1").value="";
            document.getElementById("num2").value="";
            document.getElementById("result").innerHTML="";
        }