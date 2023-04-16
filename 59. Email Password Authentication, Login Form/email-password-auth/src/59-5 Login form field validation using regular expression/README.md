# 59-5 Login form field validation using regular expression

## \_\_STEPS

### 1. [Regex to validate password strength](https://stackoverflow.com/questions/5142103/regex-to-validate-password-strength)


``` jsx 
^                         Start anchor
(?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
(?=.*[!@#$&*])            Ensure string has one special case letter.
(?=.*[0-9].*[0-9])        Ensure string has two digits.
(?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
.{8}                      Ensure string is of length 8.
$                         End anchor.

```
