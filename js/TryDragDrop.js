///*/
var ContainerDiv = document.getElementById("ContainerDiv");
var Palette = document.getElementById("Palette");
var EditorDiv = document.getElementById("EditorDiv");
var GeneratePage = document.getElementById("GeneratePage");

var Header = document.getElementById("Header");
var Footer = document.getElementById("Footer");
var Sidebar = document.getElementById("Sidebar");
var UL = document.getElementById("UL");
var OL = document.getElementById("OL");

//var GeneratePage = document.getElementById("GeneratePage");

///*/

//1.User Drag The Element
function dragStart(e) {
    /* console.log("e" + e);
     console.log("e.target" + e.target);
     console.log("e.target.id:" + e.target.id);*/

    var data = e.target.id;//Ex: Header,Footer,Sidebar,Any ID
    e.dataTransfer.setData("Text", data);
}

//2.Over the Element on the Div
function dragOver(e) {
    e.preventDefault();
}

//3.Leave the element on the div 
function drop(e) {

    e.preventDefault();
    var data = e.dataTransfer.getData("Text");
    $("#" + data).clone().appendTo("#" + e.target.id).attr("id", "New_" + data);
    $("#New_" + data).removeAttr("ondragstart").removeAttr("draggable");
    $("#New_" + data).css({
        position: "absolute",
        top: e.clientY,
        left: e.clientX,
        resize: "both",
        overflow: "auto"


    });
    $("#New_" + data).dblclick(function (e) {
        $("#New_" + data).remove();
    });

    /*console.log("e.target(drop)" + e.target);
     console.log("e.target.id:(drop)" + e.target.id);
     console.log("x:" + e.clientX);
     console.log("y:" + e.clientY);
     console.log("data:" + data);
     //data.style.position="absolute";
     //data.style.top=e.clientY;
     //data.style.left=e.clientX;
     */
    /* // EditorDiv.innerHTML = "<img src='" + data + "' id='myImg' width='100' height='100'>";
     var d = document.getElementById("myImg");
     d.style.position = "absolute"
     d.style.top = e.clientY + "px";
     d.style.left = e.clientX + "px";*/

}

function dragEnter(e) {
    e.preventDefault();
}
function dragleave() {
}

function dragEnd() {
}

EditorDiv.addEventListener("drop", drop);
EditorDiv.addEventListener("dragover", dragOver);
GeneratePage.addEventListener("click", generatePage);

//4.Generate Page
function generatePage() {

    localStorage.setItem("MyPage", EditorDiv.innerHTML);
    window.open("GeneratePage.html", 200, 300);
}
