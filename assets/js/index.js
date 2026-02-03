function getElement(id) {
	const element = document.getElementById(id);
	return element;
}

const serviceItem = getElement("service-item");

serviceItem.addEventListener("click", function (e) {
	e.preventDefault();
	if (e.target.className.includes("btn-heart")) {
		const btnHeart = e.target;
		alert(`Your Service has been added to our list`);

		const wishListCount = getElement("wishlist-count").innerText;

		const newWishList = Number(wishListCount) + 1;
		getElement("wishlist-count").innerText = newWishList;
	}

	if (e.target.className.includes("btn-call")) {
		const btnCall = e.target;
		// const serviceImg = btnCall.parentNode.parentNode.children[0].children[0].children[0].src;
		const serviceTitle = btnCall.parentNode.parentNode.children[1].children[0].innerText;
		const serviceNumber = btnCall.parentNode.parentNode.children[1].children[2].innerText;

		alert(`We are calling to ${serviceTitle} of ${serviceNumber} please wait for a while`);

		const coinCounter = getElement("coin-counter").innerText;

		const updatedCount = Number(coinCounter) - 20;
		if (updatedCount < 0) {
			alert("Sorry You dont have any Coins Please Recharge Again");
			return;
		}
		getElement("coin-counter").innerText = updatedCount;
		const data = {
			date: new Date().toLocaleTimeString(),
		};

		const serviceContainer = getElement("service-container");
		const newService = document.createElement("div");
		newService.innerHTML = `
		<div class="p-4 rounded-lg bg-[#FAFAFA] flex items-center justify-between">
                                    <div class="flex-1">
                                        <h4 class="text-18 font-medium">${serviceTitle}</h4>
                                        <p class="text-16 text-paragraph">${serviceNumber}</p>
                                    </div>
                                    <p class="text-14 text-headline-black">${data.date}</p>
                                </div>
		`;

		serviceContainer.appendChild(newService);
	}

	if (e.target.className.includes("btn-copy")) {
		const copyBtn = e.target;
		const serviceBox = copyBtn.closest(".service-box");
		const contactNumber = serviceBox.querySelector(".contact-number").innerText;
		navigator.clipboard.writeText(contactNumber).then(() => {
			alert("Copy to your clipboard");
			// Increment copy counter
			const copyCounter = getElement("copy-counter").innerText;
			console.log(copyCounter);
			const newCopy = Number(copyCounter) + 1;
			getElement("copy-counter").innerText = newCopy;
		});
	}
});

document.getElementById("btn-clear").addEventListener("click", function () {
	const serviceContainer = getElement("service-container");
	serviceContainer.innerHTML = "";
});
