function analyzeResume(){

    let fileInput = document.getElementById("resume");

    if(fileInput.files.length == 0){

        alert("Please upload resume first");

        return;
    }

    document.getElementById("loading").style.display = "block";

    setTimeout(function(){

        document.getElementById("loading").style.display = "none";

        document.querySelector(".result-box").style.display = "block";

        let randomScore = Math.floor(Math.random() * 31) + 70;

        document.getElementById("score").innerText =
        "ATS Score: " + randomScore + "%";

        document.querySelector(".progress").style.width =
        randomScore + "%";

        const suggestions = [

            "Add React projects to improve your frontend profile.",

            "Learn SQL and database concepts.",

            "Improve your resume summary section.",

            "Add GitHub portfolio links.",

            "Mention internship experience clearly."

        ];

        let randomSuggestion =
        suggestions[Math.floor(Math.random() * suggestions.length)];

        document.getElementById("suggestion").innerText =
        randomSuggestion;

    }, 3000);

}