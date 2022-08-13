import os

print("Starting Build...")

os.chdir('../../next-js')

print("Current Working Path " + os.getcwd())

print(os.listdir())

a = os.listdir()

if(a.__contains__("package.json")):
    os.environ.setdefault('manager', 'npm')
    print(os.environ.get('manager'))
    os.environ.setdefault('command', 'ci')
    print(os.environ.get('command'))
    os.environ.setdefault('runner', 'npx --no-install')
    print(os.environ.get('runner'))
    os._exit(0)
else:
    print("Unable to determine packager manager")
    os._exit(1)


