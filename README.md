## Quick description:

This project provides complete and ready-to-use animated components with high-end code quality using Next.js, Tailwind.css, And Framer Motion!

## Dev Stack:

1. Next.js
2. Tailwind.css
3. Framer Motion
4. ContentLayer
5. Vercel

## How to contribute

### Running the app locally

1. Clone this repo 
2. Run yarn on the repo to install node_modules
3. Run yarn dev to start the app. If you wish to run on a different port, run yarn dev -p 8000
4. Open localhost:3000

The app runs on Next.js and will automatically hot reload when you make changes.

## Adding a component

Follow the following steps to display a component in Contentlayer:

1. Create your component file inside `src/ui` with your desired name.
2. Imprort your component in `src/components/MDXComponents.ts` file and pass it to `MDXComponents` object.
3. Inside `data/components` create a folder with your component name e.g. `animated-component` & create a `config.md` file inside.
4. Inside `config.md` file write your component title and slug.

```md
---
title: Animated Component
slug: animated-component
---
```

5. Now you can create your component preview file e.g. `animated-component-1.mdx`

```mdx
---
title: Animated Component 1
description: Animated Component 1 description
date: 2022-08-23
tags: ["animated", “component”]
image: /ui/component/animated-component-image.png
JScode: code/animated-component/animated-component-js.mdx
TScode: code/animated-component/animated-component-ts.mdx
config: components/animated-component/config.md
---

<YourComponent />
```

> `<YourComponent />` should be present in `src/components/MDXComponents.ts` file.
> `JScode` is your component file code(JavaScript)
> `TScode` is your component file code(TypeScript)

6. Inside `data/code` create a folder with the same name you have chosen in step 3.
7. Create 2 files inside the folder that you have created in step 6(One for JavaScript and the other for TypeScript) e.g. `animated-component-js.mdx` & `animated-component-ts.mdx`(Make sure that they are the same as the ones in step 5).
8. Write your component code

animated-component-js.mdx:

````mdx
---
name: JavaScript Animated Component
---

```jsx
import React from "react";
```
````

animated-component-ts.mdx:

````mdx
---
name: TypeScript Animated Component
---

```tsx
import React from "react";

type Props = {
  text: string;
};
```
````

## Contributors
- [Omar Ouhra](https://twitter.com/OuhraOmar)
- [Imad Atyat Allah](https://twitter.com/ImadAtyat)
- Next contributor name ...


<p align="center">
Made by proud Morroccan Developers 🇲🇦 🇲🇦
</p>
