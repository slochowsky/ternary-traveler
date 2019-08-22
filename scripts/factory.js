const factoryFuncs = {
    createInterestHTML(interestObj) {
        return `
        <section>
            <h1>${interestObj.articleName}</h1>
            <p>${interestObj.articleDescription}</p>
            <p>${articleObj.articleCost}</p>
            <button id="editInterest--${interestObj.id}">Edit</button>
            <button id="deleteInterest--${interestObj.id}">Delete</button>
            </section>`
    },

createDOM() 
{
    return `
    <header>
        <h1>Ternary Traveler</h1>
    </header>
    <article id="itineraryContainer"></article>
        <h1>Interests</h1>
        <dialog id="interestDialog">
            <input type="hidden" id="interestID" value="" />
            <section>
            <form action="">
                <label for="">Name</label>
                <input type="text" id="intrestNameInput">
            </form>
            <form action="">
                <label for="">Interest Description</label>
                <input type="text" id="interestDescriptionInput">
            </form>
            <form action="">
                <label for="">Interest Cost</label>
                <input type="number" id="interestCostInput">
            </form>
            <button id="saveInterestButton" class="hideInterest">Save</button>
            <button id="cancelDialogInterestBox" class="cancelInterestDialog">Cancel</button>
            </section>
            </dialog>
        </dialog>
    `
}
}
export default factoryFuncs