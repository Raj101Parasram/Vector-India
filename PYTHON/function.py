# answer 1
from shlex import split


def welcome():
    print("Welcome to Python Functions")

welcome()

# answer 2
def square(num):
    return num*num

s=square(5)
print(s)

# answer 3
def student(Name="Not Given", course="Not Given"):
    print("Name :" +Name +", course :" +course)

s1="Raj"
c1="Python"
s2="Anita"
c2="Data Science"
student(s1,c1)
student(s2,c2)

# Answer 4
def total(*n):
    print(sum(n))

total(1,2,3,4,5,6)

# Answer 5
def employ(**d):
    print(d)

employ(Name="Raj")
employ(Age=23)
employ(Department="IT")
employ(name="rajuu", age=21, deparment="iit")