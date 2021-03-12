#Availity Test

#####Question 4:

```
Coding exercise: You are tasked to write a checker that validates the parentheses of a LISP code.  
Write a program (in Java or JavaScript) which takes in a string as an input and returns true if all 
the parentheses in the string are properly closed and nested.
```
#####Solution 4:

A class named `LispChecker` is added inside `com.availity.test.lispchecker` package. Test cases for the same has been written in same package inside `test` package.

#####Question 6:

```
Coding exercise:  Availity receives enrollment files from various benefits management and enrollment solutions (I.e. HR platforms, payroll platforms).  Most of these files are typically in EDI format.  
However, there are some files in CSV format.  For the files in CSV format, write a program that will read the content of the file and separate enrollees by insurance company in its own file. Additionally, 
sort the contents of each file by last and first name (ascending).  Lastly, if there are duplicate User Ids for the same Insurance Company, then only the record with the highest version should be included. 
The following data points are included in the file:
·         User Id (string)
·         First Name (string)
·         Last Name (string)
·         Version (integer)
·         Insurance Company (string)
```
#####Solution 6:

`EnrollmentService` class inside package `com.availity.test.enrollment` which has the expected solution. 

`main` method of `EnrollmentApplication` will execute the solution on the `enrollment.csv` file. 

You can always call the `processCSVEnrollment` method with a filename to process a file.
