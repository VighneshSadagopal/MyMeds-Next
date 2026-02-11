type DrupalTokenResponse = {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token?: string;
    scope?: string;
  };
  
  export async function drupalPasswordGrantLogin(params: {
    username: string;
    password: string;
  }) {
    const baseUrl = process.env.DRUPAL_BASE_URL!;
    const clientId = process.env.DRUPAL_OAUTH_CLIENT_ID!;
    const clientSecret = process.env.DRUPAL_OAUTH_CLIENT_SECRET!;
  
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("client_id", clientId);
    urlencoded.append("client_secret", clientSecret);
    urlencoded.append("username", params.username);
    urlencoded.append("password", params.password);
  
    const url = `${baseUrl}oauth/token`;

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };
    

    const res = await fetch(url, requestOptions);
  
    const text = await res.text();

    if (!res.ok) {
      throw new Error(text || `Drupal token failed (${res.status})`);
    }
  
    return JSON.parse(text);
  }
  
  