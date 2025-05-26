export async function LoginApi (email, password){
    const endpoint = '/login';
    const body = {
        email: email,
        password: password
    };
    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(body)
    })
    return response.json();
}