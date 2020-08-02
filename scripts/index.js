function calculatepackage()
{
	var adultcount=document.getElementById("adult").value;
	var childcount=document.getElementById("children").value;
	var totalcost=(adultcount*4000)+(childcount*3000);
	document.getElementById("totalpackage").value=totalcost;
}
