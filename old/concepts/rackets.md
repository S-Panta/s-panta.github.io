## racket - a variation of Scheme
- To download racket, go https://download.racket-lang.org/
- Either use DrRacket to run code as IDE or use VsCode and install Magic Racket extension.
- To run any racket file ( the file ends with extension `.rkt`), do `racket <filename>`


### Racket tutorials
use `define` to define a variable.
```
    (define name "foo")
```
It means a string called "foo" is stored in "name".

Here is another example.
```
    #lang racket
    ( define pi 3.2)
    (define radius 2)
    (define circumference (* 2 pi radius))
    circumference
```
Here every storing of pi radius is done using define and later used for circumference which is pushed in output.

Now back to procedures which is another name for naming group of compound operation
```
    (define (⟨name⟩ ⟨formal parameters⟩)
    ⟨body⟩)
```
Here formal parameters are used in body and body is where the implementation happens. Actual parameter are given for the plance of formal parameters.
```
    (define (square x) 
        (* x x)
    )
    (square 2)
```
Use `cond` keyword to define condition in the syntax. The coding syntax is as follows:

```
    (cond (⟨p1⟩ ⟨e1⟩)
    (⟨p2⟩ ⟨e2⟩)
    : : :
    (⟨pn⟩ ⟨en⟩))
```
Here , the first expression `p1` or `p2` are called predicate i.e their value is evaluated as True or False. If the first predicate is true, expression `e1` is returned, if not it goes to next line. A friendly example to understand this is given below:

```
    (define sallary 5000)
    (define expenses 2000)
    (define (status ) 
        (cond((> expenses sallary) "poor")
            ((< expenses sallary) "well enough")
            ((= expenses sallary) "push more")   
        )
    )
    (status )
```
Here sallary expenses are two variables to store value, status is a function and cond is used to define whether the sallary matches current expenses. Normal if-else conditions can be written as 

```
    (define age 15)
    (cond ((< age 18) "young")
        (else "old")
    )
```
