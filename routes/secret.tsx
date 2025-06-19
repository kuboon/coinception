/// <reference lib="deno.unstable" />
import { setMessages } from "../lib/kv.ts";
import { define } from "../utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const query = new URL(ctx.url).searchParams;
    const hand = query.get("hand") || "左";
    const coin = query.get("coin") || "500";
    const price = query.get("price") || "1980";
    const handCoin = query.get('handCoin') || `${hand}手に${coin}円玉`;
    const priceText = `${price}円`;
    await setMessages({ handCoin, priceText });
    return Response.json({
      handCoin,
      price,
    });
  },
});
