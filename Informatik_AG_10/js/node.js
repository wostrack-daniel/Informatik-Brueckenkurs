import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client("DEINE_CLIENT_ID");

async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: "DEINE_CLIENT_ID",
  });
  const payload = ticket.getPayload();
  return payload;
}
