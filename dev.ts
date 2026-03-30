import { Builder } from "fresh/dev";
import { Scanner } from "@tailwindcss/oxide";
import { compile, toSourceMap } from "@kuboon/tailwindcss-deno";

const scanner = new Scanner({
  sources: [
    {
      base: Deno.cwd(),
      pattern: "**/*",
      negated: false,
    },
  ],
});

const builder = new Builder();

builder.onTransformStaticFile({
  pluginName: "tailwindcss-deno",
  filter: /\.css$/,
}, async (args) => {
  const candidates = scanner.scan();

  const compiler = await compile(args.text, {
    base: Deno.cwd(),
    onDependency: (path) => {
      console.log("Dependency:", path);
    },
  });
  return {
    content: compiler.build(candidates),
    map: toSourceMap(compiler.buildSourceMap()).inline,
  };
});

if (Deno.args.includes("build")) {
  // This creates a production build
  await builder.build();
} else {
  // This starts a development server with live reload
  await builder.listen(() => import("./main.ts"));
}
