function visit(){
    		fetch('https://api.countapi.xyz/update/ToxicNoob/ToxicBomber/?amount=1')
       		 .then(res => res.json())
   		    .then(data => document.getElementById("visit").innerHTML = data.value)
};
visit();

function cng(){
	document.getElementById("btn").value = "Start Bombing";
	document.getElementById('url').src = "";
	document.getElementById('url').setAttribute("style", "");
}

function click_btn(){
	window.onload = function() {
  	document.getElementById("number").focus();
};

	var input = document.getElementById("number");
	input.addEventListener("keyup", function(event) {
 	 	if (event.keyCode === 13) {
   		event.preventDefault();	   		document.getElementById("amount").focus();
  		}
	});
	var input = document.getElementById("amount");
	input.addEventListener("keyup", function(event) {
 	 	if (event.keyCode === 13) {
   		event.preventDefault();
   		document.getElementById("btn").click();
   		document.getElementById("btn").focus();
  		}
	});

}

function start(){
	var number = document.getElementById("number").value;
	if (number.length != 11){
		swal("Wrong Number!", "Your Number Must Be 11 Digit  Long!!", "error").then(() => {
			document.getElementById("number").focus();
		});
	}
	else{
		var amount = document.getElementById("amount").value;
		if (amount < 1){
			swal("No Amount!", "Your Must Enter Some Amount", "warning").then(() => {
				document.getElementById("amount").focus();
			});
		}
		else{
			document.getElementById("btn").value = "Started!!";
			run();
		}
	}
}

function run(){
	var number = document.getElementById("number").value;
	var amount = document.getElementById("amount").value;
	var url = "http://toxicnoob.ezyro.com/tools_data/data.php?number="+number+"&amount="+amount;
	document.getElementById('url').src = url;
		document.getElementById("url").setAttribute("style", "border: solid rgb(0,150,255); border-radius: ;box-shadow: 0 0 30px 0 rgb(0,150,255);");
}

window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) { window.parent.postMessage("resize", "*"); }
