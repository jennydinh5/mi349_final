function myFunction(){
    const node = document.createElement("li");
    const textnode = document.createTextNode("Finish Eating");
    node.appendChild(textnode);
    document.getElementById("tasks").appendChild(node);
}