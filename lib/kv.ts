export type Messages = {
  handCoin: string;
  priceText: string;
}

const kv = await Deno.openKv(Deno.env.get("DENO_KV_URL"));
export async function getMessages(): Promise<Messages | null> {
  const result = await kv.get<Messages>(["coinception", "oohara"]);
  if (result.value) {
    return result.value;
  }
  return {
    handCoin: "左手に500円玉",
    priceText: "2000円",
  };
}
export async function setMessages(messages: Messages): Promise<void> {
  await kv.set(["coinception", "oohara"], messages);
}
