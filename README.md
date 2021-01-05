# Project Title

Norhteastern University HRM Website

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! After running the following command,

    $ npm install npm -g

Your npm should be updated. 
###

Navigate to NEU-Admin from your current folder and install the dependencies using the following command!

    $ npm install

###

###
Once all the dependencies are installed, you can run the development server using the following command!

    $ npm run dev

Your development server will start

###
You now need to navigate to `client` folder and install the dependencies in the `client` folder using the following command!

    $ npm install

This is where all the authorization information is stored. Once all the packages are successfully installed, you can run the server using 

    $ npm start

But hold tight as you will be able to navigate to the website open but you won't be able to login or register as we are yet to make a connection to the database, where our entire data will be stored and retrieved from. 

###

###

You now need to navigate to neu-hrm and repeat the steps No. 57 and 61 in order to see the front-end of the website where all the data from the database will be displayed. 

###

###

As the `crud` has been built using python, you now need to create a virtualenv in order to install all the requirements. 

You could use the following command in order to creare a virtualenv!

    $ python3 -m venv /path/to/new/virtual/environment

You can navigate to https://docs.python.org/3/library/venv.html and follow the example to create a virtual environment

Once the virtual enviroment has been created you can run the virtual environment using 

    $ virtualenvname\Scripts\activate

to activate the virtual environment and then navigate to the `crud` folder and then run the following command to install the pip.

    $ python get-pip.py


###

Once pip has been installed, you can now install the requirements using the following command!

    $ pip install -r requirements.txt 
    --------------OR-----------------
    $ pip3 install -r requirements.txt

###

