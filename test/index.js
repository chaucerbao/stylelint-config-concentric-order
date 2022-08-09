const test = require('ava')
const path = require('path')
const stylelint = require('stylelint')

const input = `
body {
  p {
    font-kerning: normal;
    font-family: serif;
    color: var(--secondary-color);
  }
  opacity: 0.9;
  @media (min-width: 768px) {
    text-align: center;
    border-bottom-width: 0;
    appearance: unset;
    border: black solid 1px;
  }
  will-change: transform;
  @mixin postcssMixin(4, 5, 6);
  span {
    @include media-breakpoint-up(md) {
      padding: 2px;
    }
    &:hover {
      color: $color;
    }
    pointer-events: none;
    &::after {
      margin: 5px;
      display: block;
    }
    grid: auto / 100px auto 100px;
    display: grid;
  }
  @include mixin(1, 2, 3);
  isolation: isolate;
  @extend .class;
  --secondary-color: black;
  $color: white;
  background-blend-mode: multiply;
  background: $color;
  border-radius: 2px;
  @mixin breakpoint-up(small) {
    color: green;
    width: 60%;
  }
  box-sizing: border-box;
  background-image: url('//picsum.photos/200/300');
  @include breakpoint(small) {
    width: 50%;
    margin: 10px;
  }
  display: flex;
  height: 80%;
  mix-blend-mode: difference;
  left: 0;
  @apply tailwind underline;
  min-height: 100vh;
  position: absolute;
  top: 0;
  .logical {
    padding-block-end: 33px;
    margin-inline-end: 26px;
    min-block-size: 43px;
    max-inline-size: 55px;
    inset-inline-end: 15px;
    margin-block-end: 23px;
    inline-size: 51px;
    max-height: 54px;
    block-size: 41px;
    inset: 0;
    max-block-size: 45px;
    min-height: 52px;
    min-width: 42px;
    margin-inline: 24px;
    padding-inline-end: 36px;
    max-width: 44px;
    margin-block: 21px;
    padding-block: 31px;
    margin-block-start: 22px;
    height: 50px;
    inset-inline: 13px;
    inset-block: 10px;
    padding-block-start: 32px;
    inset-inline-start: 14px;
    padding-inline-start: 35px;
    min-inline-size: 53px;
    margin-inline-start: 25px;
    inset-block-start: 11px;
    padding-inline: 34px;
    width: 40px;
    inset-block-end: 12px;
  }
  .logical-border {
    border-inline-color: #000040;
    border-block-style: solid;
    border-inline-style: solid;
    border-block-end-style: solid;
    border-inline-start-width: 50px;
    border-radius: 0;
    border-end-start-radius: 3px;
    border-block-end-width: 30px;
    border-start-end-radius: 2px;
    border-end-end-radius: 4px;
    border-inline-start-style: solid;
    border-start-start-radius: 1px;
    border-inline-start-color: #000050;
    border-block-end: 30px solid black;
    border-inline: 40px solid black;
    border-inline-end: 60px solid black;
    border-block: 10px solid black;
    border-inline-end-style: solid;
    border-block-start-color: #000020;
    border-inline-end-color: #000060;
    border-block-end-color: #000030;
    border-block-color: #000010;
    border-inline-end-width: 60px;
    border: 0;
    border-inline-start: 50px solid black;
    border-block-start: 20px solid black;
    border-block-start-width: 20px;
    border-inline-width: 40px;
    border-block-width: 10px;
    border-block-start-style: solid;
  }
}
`

const expected = `
body {
  $color: white;
  --secondary-color: black;
  @extend .class;
  @include mixin(1, 2, 3);
  @mixin postcssMixin(4, 5, 6);
  @apply tailwind underline;
  box-sizing: border-box;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
  border-radius: 2px;
  isolation: isolate;
  mix-blend-mode: difference;
  background: $color;
  background-image: url('//picsum.photos/200/300');
  background-blend-mode: multiply;
  height: 80%;
  min-height: 100vh;
  will-change: transform;
  p {
    color: var(--secondary-color);
    font-family: serif;
    font-kerning: normal;
  }
  span {
    display: grid;
    grid: auto / 100px auto 100px;
    pointer-events: none;
    &::after {
      display: block;
      margin: 5px;
    }
    &:hover {
      color: $color;
    }
    @include media-breakpoint-up(md) {
      padding: 2px;
    }
  }
  .logical {
    inset: 0;
    inset-block: 10px;
    inset-block-start: 11px;
    inset-block-end: 12px;
    inset-inline: 13px;
    inset-inline-start: 14px;
    inset-inline-end: 15px;
    margin-block: 21px;
    margin-block-start: 22px;
    margin-block-end: 23px;
    margin-inline: 24px;
    margin-inline-start: 25px;
    margin-inline-end: 26px;
    padding-block: 31px;
    padding-block-start: 32px;
    padding-block-end: 33px;
    padding-inline: 34px;
    padding-inline-start: 35px;
    padding-inline-end: 36px;
    width: 40px;
    block-size: 41px;
    min-width: 42px;
    min-block-size: 43px;
    max-width: 44px;
    max-block-size: 45px;
    height: 50px;
    inline-size: 51px;
    min-height: 52px;
    min-inline-size: 53px;
    max-height: 54px;
    max-inline-size: 55px;
  }
  .logical-border {
    border: 0;
    border-block: 10px solid black;
    border-block-width: 10px;
    border-block-style: solid;
    border-block-color: #000010;
    border-block-start: 20px solid black;
    border-block-start-width: 20px;
    border-block-start-style: solid;
    border-block-start-color: #000020;
    border-block-end: 30px solid black;
    border-block-end-width: 30px;
    border-block-end-style: solid;
    border-block-end-color: #000030;
    border-inline: 40px solid black;
    border-inline-width: 40px;
    border-inline-style: solid;
    border-inline-color: #000040;
    border-inline-start: 50px solid black;
    border-inline-start-width: 50px;
    border-inline-start-style: solid;
    border-inline-start-color: #000050;
    border-inline-end: 60px solid black;
    border-inline-end-width: 60px;
    border-inline-end-style: solid;
    border-inline-end-color: #000060;
    border-radius: 0;
    border-start-start-radius: 1px;
    border-start-end-radius: 2px;
    border-end-start-radius: 3px;
    border-end-end-radius: 4px;
  }
  @include breakpoint(small) {
    margin: 10px;
    width: 50%;
  }
  @mixin breakpoint-up(small) {
    width: 60%;
    color: green;
  }
  @media (min-width: 768px) {
    appearance: unset;
    border: black solid 1px;
    border-bottom-width: 0;
    text-align: center;
  }
}
`

test('stylelint --fix', async (t) => {
  const data = await stylelint.lint({
    code: input,
    config: {
      extends: path.resolve('src', 'index.js'),
    },
    fix: true,
  })

  t.is(data.results[0]._postcssResult.root.toString(), expected)
})
