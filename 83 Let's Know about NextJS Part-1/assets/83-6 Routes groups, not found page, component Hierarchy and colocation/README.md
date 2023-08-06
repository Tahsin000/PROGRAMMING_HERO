# 83-6: Routes groups, not found page, component Hierarchy and colocation

## [Project Code](https://github.com/Tahsin000/PROGRAMMING_HERO/tree/fb2c93b8bb3d21ee18088b86a6955061dc275098)

<hr/>

## Routes groups

1. folder name naming convention is `()`

## not found page

1. this is not-found component code

```js
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center text-red-500 h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold">404</h1>
      <h1 className="text-2xl">Not Found</h1>
    </div>
  );
};

export default NotFound;
```
