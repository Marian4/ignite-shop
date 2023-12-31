import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const { priceId } = req.body

    if (req.method !== 'POST') return res.status(405).json({ error: 'Method now allowed'})
    if (!priceId) return res.status(404).json({ error: 'Price not found'})

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL}/`,
        mode: 'payment',
        line_items: [
            {
                quantity: 1,
                price: priceId
            }
        ]
    })

    return res.status(201).json({ checkoutUrl: checkoutSession.url })
}
