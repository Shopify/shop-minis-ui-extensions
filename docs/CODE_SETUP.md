# Shop Minis UI Extensions - Code Setup

# Setup

This repo uses `yarn` and assumes you have it installed globally, if that's not the case simply use `npx yarn` below

1) Fork `Shopify/shop-minis-ui-extensions` to `https://github.com/<your-username>/shop-minis-ui-extensions`
2) `$ git clone https://github.com/<your-username>/shop-minis-ui-extensions.git`
3) `$ cd shop-minis-ui-extensions`
4) `$ yarn`
5) `$ yarn fixture-mini dev`
6) Select a target to open the fixture mini (eg press `i` for iOS)
7) Once Shop opens log in with a partner developer account. This is important because otherwise you will not be able to see the dev store.
8) Search for and open the `shop-minis-sandbox` store
9) By default we use `shop.product.variants.render-before` for testing so go to one of the test products
10) You should see an extension load

# Make a new extension

The easiest way to start is to copy an existing extension component

1) `$ cp -r packages/shop-minis-ui-extensions/src/extensions/bundle-products-carousel packages/shop-minis-ui-extensions/src/extensions/cool-new-extension`
2) Rename the default export to match the filename (eg `CoolNewExtension`) and add it to `packages/shop-minis-ui-extensions/src/index.tsx`
3) Import it in `packages/fixture-mini/src/targets/shop.product.variants.render-before/render.tsx`
4) It should hot reload
5) Now you can work on your new extension

If you saw any errors you can try to hard restart Shop and/or stop and re-run `yarn fixture-mini dev`

# Submit changes

1) Push your changes to your fork
2) Submit a PR to `Shopify/shop-minis-ui-extensions`

# Use your new extension

Once your PR is merged a new version of https://www.npmjs.com/package/@shopify/shop-minis-ui-extensions will be published with your changes
Back in your mini run `npx shop-minis upgrade` / `yarn shop-minis upgrade`
Now you can import and use your extension
