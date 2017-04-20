
 //3. Create a div element with a class name of "view" and append it to the document body.
var viewDiv = document.createElement("div");
viewDiv.className = "view";
document.body.appendChild(viewDiv);

//4. Create a div element with a class name of "grass" and append it to the previously created "view" div from step 3.
var grassDiv = document.createElement("div");
grassDiv.className="grass";
viewDiv.appendChild(grassDiv);


//5. Create a div element with a class name of "sun" and append it to the previously created "view" div from step 3.
var sunDiv = document.createElement("div");
sunDiv.className="sun";
viewDiv.appendChild(sunDiv);

//6. The div classes will be "ray-1", "ray-2", "ray-3", "ray-4", and "ray-5". 
var n = 0;
while(n < 5){
    var rayNode = document.createElement("div");
    n++;
    rayNode.className = "ray-" + n;
    console.log("the className is ",rayNode.className);
    sunDiv.appendChild(rayNode);
}

//7.Create a div element with a class name of "mountain" and append it to the previously created "view" div from step 3.
var mountainDiv =  document.createElement("div");
mountainDiv.className = "mountain";
viewDiv.appendChild(mountainDiv);

//8.Create a div element with a class name of "mountain-top" and append it to the previously created "mountain" div from 
var mountainTop = document.createElement("div");
mountainTop.className = "mountain-top"
mountainDiv.appendChild(mountainTop);

//9.do while, mountain cap
var n=0;
while(n < 3){
    var capNode = document.createElement("div");
    n++;
    capNode.className = "mountain-cap-" + n;
    mountainDiv.appendChild(capNode);
}