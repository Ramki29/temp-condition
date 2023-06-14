let temp=parseInt(prompt("enter temp"));
if(temp<0)
{
	console.log("Freezing weather");
}
else if(temp==0 && temp<10)
{
	console.log("Very Cold weather");
}
else if(temp>=10 && temp<20)
{
	console.log("Cold weather");
}
else if(temp>=20 && temp<30)
{
	console.log("Normal in Temp");
}
else if(temp>=30 && temp<40)
{
	console.log("Its Hot");
}
else
{
	console.log("Its Very Hot");
}