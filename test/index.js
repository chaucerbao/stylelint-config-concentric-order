import test from "ava";
import path from "path";
import stylelint from "stylelint";

const input = `
body {
  p {
    font-weight: bold;
    color: var(--secondary-color);
  }
  @media (min-width: 768px) {
    text-align: center;
    border-bottom-width: 0;
    border: black solid 1px;
  }
  @include mixin(1, 2, 3);
  @extend .class;
  --secondary-color: black;
  $color: white;
  background: $color;
  border-radius: 2px;
  box-sizing: border-box;
  @include breakpoint(small) {
    width: 50%;
    margin: 10px;
  }
  display: flex;
  height: 80%;
  left: 0;
  min-height: 100vh;
  position: absolute;
  top: 0;
}
`;

const expected = `
body {
  $color: white;
  --secondary-color: black;
  @extend .class;
  @include mixin(1, 2, 3);
  box-sizing: border-box;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  background: $color;
  height: 80%;
  min-height: 100vh;
  p {
    color: var(--secondary-color);
    font-weight: bold;
  }
  @include breakpoint(small) {
    margin: 10px;
    width: 50%;
  }
  @media (min-width: 768px) {
    border: black solid 1px;
    border-bottom-width: 0;
    text-align: center;
  }
}
`;

test("stylelint --fix", async t => {
  const data = await stylelint.lint({
    code: input,
    syntax: "scss",
    config: {
      extends: path.resolve("src", "index.js")
    },
    fix: true
  });

  t.is(data.results[0]._postcssResult.root.toString(), expected);
});
