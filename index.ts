async function Get(url: string) {
    const request: Response = await fetch(url);

    if (request.ok) {
        return request.json();
    }

    return console.error(request);
    
}

module.exports = Get