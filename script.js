// your code here
const h3 = document.querySelector("h3");
const nameInput =  document.querySelector("input#name");
const yearInput =  document.querySelector("input#year");

document.querySelector("button").addEventListener("click",()=>{
	const name = nameInput.value.trim();
            const year = yearInput.value.trim();

            let params = [];

            if (name !== "") {
                params.push(`name=${encodeURIComponent(name)}`);
            }

            if (year !== "") {
                params.push(`year=${encodeURIComponent(year)}`);
            }

            // Build final URL
            let finalURL = "https://localhost:8080/";

            if (params.length > 0) {
                finalURL += "?" + params.join("&");
            }

            h3.innerText = finalURL;
});