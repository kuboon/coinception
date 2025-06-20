/// <reference lib="deno.unstable" />
import { getMessages, setMessages } from "../lib/kv.ts";
import { define } from "../utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const query = new URL(ctx.url).searchParams;
    const currentMessages = await getMessages();
    const hand = query.get("hand") || currentMessages.hand;
    const coin = query.get("coin") || currentMessages.coin;
    const price = query.get("price") || currentMessages.price;
    if(hand !== "left" && hand !== "right") {
      return Response.json({ error: "Invalid hand. Use 'left' or 'right'." }, { status: 400 });
    }
    await setMessages({ hand, coin, price });
    return Response.json({
      hand,
      coin,
      price,
    });
  },
});
