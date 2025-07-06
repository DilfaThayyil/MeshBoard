type LoginPayload = {
    email: string
    password: string
}

type LoginResponse = {
    token: string
    message?: string
}

const BASEURL = 'http://localhost:4001/api'

export async function loginUser(data: LoginPayload): Promise<LoginResponse> {
    const response = await fetch(`${BASEURL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.message || 'Login failed')
    }

    return result
}
