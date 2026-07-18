// Mengambil informasi IP
async function getIP() {

    const ip = document.getElementById("ip");
    const country = document.getElementById("country");
    const city = document.getElementById("city");
    const isp = document.getElementById("isp");
    const timezone = document.getElementById("timezone");

    ip.textContent = "Loading...";

    try {

        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        ip.textContent = data.ip || "Unknown";
        country.textContent = data.country_name || "-";
        city.textContent = data.city || "-";
        isp.textContent = data.org || "-";
        timezone.textContent = data.timezone || "-";

    } catch (error) {

        ip.textContent = "Failed to load.";
        console.error(error);

    }

}


// Browser Information
function userAgent() {

    document.getElementById("result").innerHTML = `
        <b>Browser Information</b><br><br>
        User Agent:<br>
        ${navigator.userAgent}
    `;

}


// Screen Information
function screenInfo() {

    document.getElementById("result").innerHTML = `
        <b>Screen Information</b><br><br>

        Width : ${screen.width}px<br>
        Height : ${screen.height}px<br>
        Available Width : ${screen.availWidth}px<br>
        Available Height : ${screen.availHeight}px<br>
        Color Depth : ${screen.colorDepth} bit
    `;

}


// Jalankan saat website dibuka
getIP();
