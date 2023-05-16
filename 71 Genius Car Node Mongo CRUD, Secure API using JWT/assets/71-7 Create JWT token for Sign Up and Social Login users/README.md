# 71-7 Create JWT token for Sign Up and Social Login users

## AuthProvider React

```js
useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser);
    setLoading(false);
    if (currentUser.email && currentUser) {
      const loggedUser = {
        email: currentUser.email,
      };
      fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loggedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("jwt response", data);
          // Warning: Local storage is not the best (second best place) to store access token
          localStorage.setItem("car-access-token", data.token);
        });
    }
  });
  return () => {
    return unSubscribe();
  };
}, []);
```
