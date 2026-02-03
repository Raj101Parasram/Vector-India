
def greet():
    print("hello world")

greet()


def gret(name):
    print("name : ", name)

gret("raj")


def add(a,b):
    print(a+b)
    return a+b
r=add(3,4)
print(r)
add(5,8)
add(9,10)


def nu(*nl):
    print(nl)

nu(1,5,6,8)

def student(name, age):
    print(name, age)
    return name,age

student(age=20, name="Raj")
student(20, "Raj")
n=student(6,'raaj')
print(n)