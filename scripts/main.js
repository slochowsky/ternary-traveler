import API from "./data.js"
import render from "./dom.js"
import factoryFuncs from "./factory.js"

// delete
dashboard.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteItenerary")) {
        const itineraryContainer = document.querySelector("#itineraryContainer")
        const itineraryId = event.target.id.split("--")[1]
        itineraryContainer.innerHTML = ""
        console.log("Delete")
        API.deleteItinerary(itineraryId)
            .then(() => {
                API.getItinerary().then(itinerary => {
                    render.renderItinerary(itinerary)
                })
            }
            )
    }
})
// dialog box
dashboard.addEventListener("click", event => {
    const showInterestDialog = document.querySelector("#addInterest")
    if (event.target.id.startsWith("addInterest")) {
        const interestDialog = document.querySelector("#interestDialog")
        interestDialog.show()
    }
})

// cancel dialog box
dashboard.addEventListener("click", event => {
    const cancelInterestDialog = document.querySelector("#cancelDialogInterestBox")
    if (event.target.id.startsWith("cancelDialogInterestBox")) {
        const interestDialog = document.querySelector("#interestDialog")
        interestDialog.close()
    }
})