export type Messages = {
  hand: string;
  coin: string;
  price: string;
}

const kv = await Deno.openKv(Deno.env.get("DENO_KV_URL"));
export async function getMessages(): Promise<Messages> {
  const result = await kv.get<Messages>(["coinception", "oohara"]);
  if (result.value) {
    return result.value;
  }
  return {
    hand: "right",
    coin: "500",
    price: "2000",
  };
}
export async function setMessages(messages: Messages): Promise<void> {
  await kv.set(["coinception", "oohara"], messages);
}
