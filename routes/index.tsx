import { page } from "fresh";
import { define } from "../utils.ts";
import { getMessages } from "../lib/kv.ts";

export const handler = define.handlers({
  async GET() {
    const { handCoin, priceText } = await getMessages();
    return page({ handCoin, priceText });
  },
});

export default define.page<typeof handler>(
  ({ data: { handCoin, priceText } }) => {
    return (
      <>
        <div
          className="hero h-96"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Coinception</h1>
              <h2 className="mb-5">大原のうえつけ</h2>
            </div>
          </div>
        </div>
        <div class="text-center leading-20">
          <h1 class="text-3xl font-bold  my-10">{handCoin}を握ってしまう。</h1>
          <p>
            観客は好きな方の手で好きなコインを握り、そのイメージをマジシャンに植え付ける。
          </p>

          <p>
            植え付けられたマジシャンは、そのイメージどおり{handCoin}を握った状態を再現する。
          </p>

          <p>
            しかし実際は、マジシャンが観客に、{handCoin}を握るイメージを、事前に植え付けていたとしたら・・・?
          </p>

          <p>
            最初からテーブルに置かれていた財布の中を見ると折りたたまれた紙片が１枚だけ入っている。
          </p>

          <p>
            マジシャンがその紙片を広げると、中には「{handCoin}」と書かれている・・・！
          </p>

          <p class="font-bold text-5xl">{priceText}</p>
        </div>
      </>
    );
  },
);
