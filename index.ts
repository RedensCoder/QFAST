type qfastResponse = {
    data: object
}

class qfast {
    static async get(url: string): Promise<qfastResponse> {
        const request: Response = await fetch(url);

        const response: qfastResponse = {
            data: await request.json()
        }

        return response;
    }
}

module.exports = qfast