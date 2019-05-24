var list = document.createElement("ol");
list.id = "list";
list.className = "list";
		
var addTask = document.getElementById("inputBtn");
addTask.addEventListener('click', function (){
			
	
	var task = document.getElementById("task").value;
	if(task=="") alert("Tienes que escribir una tarea");
	else
	{
		
		addElement (list, task);
		
		
		document.getElementById("task").value ="";
	}
}, false);
	
function addElement(ol, text)
{
	var element = document.createElement("li");
	element.id = "element";
	element.className = "element";
	element.appendChild(document.createTextNode(text));
	ol.appendChild(element);
	document.getElementById("board").appendChild(ol);
	
	
	addRemoveBtn(element);
	
	
	addCrossStyle(element);
}

function addRemoveBtn(li)
{
	
	var removeTask = document.createElement("input");
	removeTask.setAttribute("type", "button");
	removeTask.setAttribute("value", "x");
	removeTask.setAttribute("class", "remove");	
	removeTask.addEventListener('click', function (){
		li.parentNode.removeChild(li);
	}, false);
	li.appendChild(removeTask);
}
		
function addCrossStyle(li)
{
	var check = false;
		
		li.addEventListener('click', function (){
			if (check==false)
			{
					li.style.textDecoration = "line-through";
					li.style.textDecorationColor = "red";
					check = true;
			}
			else
			{
					li.style.textDecoration = "none";
					check = false;
			}
		}, false);
}