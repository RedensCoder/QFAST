type qfastHeaders = {
    "Content-Type": string,
    Authorization: string
}

type qfastResponse = {
    url: string,
    data: object,
    headers?: qfastHeaders
}

class qfast {
    static async get(url: string, headers?: qfastHeaders): Promise<qfastResponse> {
        const request: Response = await fetch(url, {
            method: "GET",
            headers: headers
        });

        const response: qfastResponse = {
            url: url,
            headers: headers,
            data: await request.json()
        }

        return response;
    }

    static async post(url: string, body?: object, headers?: qfastHeaders): Promise<qfastResponse> {
        const request: Response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const response: qfastResponse = {
            url: url,
            headers: headers,
            data: await request.json()
        }

        return response;
    }
}

module.exports = qfast