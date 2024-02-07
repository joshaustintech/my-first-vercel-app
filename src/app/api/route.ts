interface HelloResponse {
    content: string
}

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const responseBody: HelloResponse = {
        content: "Success!"
    }
    return Response.json(responseBody)
}