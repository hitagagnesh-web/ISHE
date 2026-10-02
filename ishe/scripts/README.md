Usage
-----

This repository includes a helper script to map image files in the `images/` folder to normalized keys and emit an `images-map.js` file that `products.html` can use for deterministic product image assignments.

Run the script (requires Node.js installed):

```cmd
cd d:\ishe
node scripts\map_images.js
```

What it creates
- `images-map.js` at the project root which sets `window.IMAGES_MAP = { ... }`.

How `products.html` uses it
- `products.html` looks for `window.IMAGES_MAP` and will prefer map entries for a product (normalized product name/category/image tokens or `product_<id>`). This makes image selection deterministic.

Recommendation
- Name your product photos with readable tokens that match product names, for example `hyaluronic_acid_serum.jpg` or `ceramide_rich_moisturiser.png`.
- After adding images, run the script and then open `products.html` in your browser to verify results.
