

function init(){

    const hideProjects = document.querySelectorAll(".project-hide");
    const viewMore = document.querySelector(".view-more");
    const wrapProject = document.querySelector(".wrap");

    viewMore.addEventListener("click", function(){ 
        hideProjects.forEach(project=>{
            project.classList.remove("project-hide");
        })
        viewMore.classList.add("hidden");
        wrapProject.classList.remove("hidden");
    });

    wrapProject.addEventListener("click", function(){ 
        hideProjects.forEach(project=>{
            project.classList.add("project-hide");
        })
        viewMore.classList.remove("hidden");
        wrapProject.classList.add("hidden");
    });

}






init();