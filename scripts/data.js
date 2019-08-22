
const API = {
    getInterest() {
        return fetch("http://localhost:8088/interest")
            .then(res => res.json())
    },
    postInterest(newInterest) {
        return fetch("http://localhost:8088/interest", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(newInterest)
        })
            .then(res => res.json())
    },
    deleteInterest(interestId) {
        return fetch(`http://localhost:8088/interest/${interestId}`,
            {
                "method": "DELETE"
            }
        )
            .then(data => data.json())
    }}
    export default API