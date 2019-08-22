import factoryFuncs from "./factory.js"


const render = {
    renderInterest(InterestInDom) {
        const interestInDom = document.querySelector("#InterestContainer")
        interestInDom.innerHTML = ""
        interestInDom.forEach(interest => {
            const interestRep = factoryFuncs.createInterestHTML(interest)
            interestInDom.innerHTML += interestRep
        })
}}
export default render
