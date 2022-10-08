export const CreateAccount = async (details, handleCurrentUser ) => {
    const resp = await fetch('/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(details),
        withCredentials: true 
    })

    const data = await resp.json()
    handleCurrentUser(data);

}