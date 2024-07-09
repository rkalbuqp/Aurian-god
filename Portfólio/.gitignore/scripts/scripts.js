function toggleProject(projectId) {
    const project = document.getElementById(projectId);
    if (project.style.display === "none") {
        project.style.display = "block";
    } else {
        project.style.display = "none";
    }
}

document.getElementById("switch-lang").addEventListener("click", function() {
    const mainContent = document.getElementById("main-content");
    const mainContentEn = document.getElementById("main-content-en");
    if (mainContent.style.display === "none") {
        mainContent.style.display = "block";
        mainContentEn.style.display = "none";
    } else {
        mainContent.style.display = "none";
        mainContentEn.style.display = "block";
    }
});