// nxt wave https://learning.ccbp.in/course?c_id=5e93210e-f183-433d-a12d-79d81deb01be&t_id=64c6b29b-1c30-4fc9-b45c-2ec92b266c14&s_id=093c73f4-78ce-404b

// dom methods:get element by id this mini project about
// dom events used are onclick event
//key takeaway moifing the documenrs

function switchOn(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("heading").textContent="Switch On";
    document.getElementById("SwitchOn").style.backgroundColor="green";
    document.getElementById("SwitchOff").style.backgroundColor="grey";
}
function switchOff(){
     document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-of-img.png";
     document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
     document.getElementById("heading").textContent="Switch Off";
     document.getElementById("SwitchOff").style.backgroundColor="black";
     document.getElementById("SwitchOn").style.backgroundColor="grey";
    

}
    


