async function Fetcher() {
    try {
        let reqURI = '';
        let response = await fetch(reqURI);
        if (response.ok) response = await response.json();
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports.Fetcher = Fetcher;