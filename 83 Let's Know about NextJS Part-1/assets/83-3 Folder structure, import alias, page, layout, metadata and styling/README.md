# 83-3: Folder structure, import alias, page, layout, metadata and styling

# Page code

```jsx
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};
export default HomePage;
```

# Layout code

```jsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Hero",
  description: "Next Hero",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="/">Home</a>
        </nav>
        {children}
        <footer> footer </footer>
      </body>
    </html>
  );
};

export default RootLayout;
```
