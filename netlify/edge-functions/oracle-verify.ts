import { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const { userAddress, turnstileToken } = await request.json();

  // 1. Verify Human with Cloudflare
  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: JSON.stringify({ secret: "YOUR_TURNSTILE_SECRET", response: turnstileToken }),
  });

  const outcome = await verify.json();

  if (outcome.success) {
    // 2. If Human, tell the Smart Contract "This address is allowed to mine"
    // (This calls the 'verifyHuman' function we wrote in Step 1)
    return new Response(JSON.stringify({ status: "Verified", energy_mult: 1.25 }));
  }

  return new Response(JSON.stringify({ status: "Denied" }), { status: 403 });
};
