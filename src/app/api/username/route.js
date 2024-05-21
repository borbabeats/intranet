import os from 'os'

export async function GET(request) {
    const username = os.userInfo().username
    return new Response(JSON.stringify({ username }), {
        headers: { 'Content-Type': 'application/json' },
    })
}