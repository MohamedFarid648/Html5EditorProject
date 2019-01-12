var ContainerDiv = document.getElementById("ContainerDiv");
var EditorDiv = document.getElementById("Palette");
var DisplayDiv = document.getElementById("EditorDiv");

var Header = document.getElementById("Header");
var Footer = document.getElementById("Footer");
var Sidebar = document.getElementById("Sidebar");
var UL = document.getElementById("UL");
var OL = document.getElementById("OL");
var GeneratePage = document.getElementById("GeneratePage");

/*DisplayDiv.value = '<!DOCTYPE html><head><title>\n\
               Build Your Site</title> \n\
              <link href="./css/style.css" rel="stylesheet" \n\
              type="text/css"/> <script src="./js/jquery-3.2.1.js" type="text/javascript"></script>\n\
               <meta charset="UTF-8"><meta name="viewport" \n\
                  content="width=device-width, initial-scale=1.0">/head> <body>';
*/
function clickHeader() {
    // DisplayDiv.innerText="gfdc";
    var HeaderValue = '<header style="width:1200px;\n\
                      height:200px; background-color: skyblue;\n\
                      //background-image: url("./images/1.jpg");\n\
                      position: relative;top: 5px;"></header>';
    DisplayDiv.value += HeaderValue;

}
Header.addEventListener("click", clickHeader);

function clickFooter() {
    // DisplayDiv.innerText="gfdc";
    var FooterValue = '<footer style="width:1200px; height:200px; \n\
                       background-color: gray;position: absolute; top: 50px;">\n\
                        </footer>';
    DisplayDiv.value += FooterValue;
    //DisplayDiv.value += "</body></html>";

}
Footer.addEventListener("click", clickFooter);
    
    GeneratePage.addEventListener("click", generatePage);

function generatePage(){
    
    localStorage.setItem("DisplayDiv",DisplayDiv.value);
    window.open("GeneratePage.html",200,300);
}

