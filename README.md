# Tech Talent Factory - DevOps Class 2020

This is the "archetype repository" for the students of Tech Talent Factory - DevOps Class 2020.

Into this repository will be saved the exercises done by the students during the class. The final assessment partially depends by the content and the usage of this repository.

## Usage

Students will have to fork this repository on our GitHub account, insert their data into the STUDENTS.md file and finally make a pull request of the updated STUDENTS.md file.

After that, the students will use this repository, their own fork, as a single repository for all their exercises. The teacher considers the students repository as **the only source of truth**, therefore no other file, exercise or implementation will be taken into consideration for the final assessment.

## Getting Started

- fork on GitHub
- clone the forked repository
- fill the STUDENTS.md file with their data
- commit the STUDENTS.md file
- push the STUDENTS.md file on remote repository
- make a new pull request to the "base repository"
- start working and enjoy

## vs-code usefull plugins

- Docker
- Vagrant (optional)

## Working Agreements
- lavoro in coppia


## Vagrant
HashiCorp Vagrant provides the same, easy workflow regardless of your role as a developer, operator, or designer. It leverages a declarative configuration file which describes all your software requirements, packages, operating system configuration, users, and more.

More info at this [link](https://www.vagrantup.com/intro/index.html).

### Vagrant - Overview
in the _vagrant_ folder there is a file called ```Vagrantfile```. Inside, the configuration of the virtual machine (VM) that can be used to perform the exercises is described. In addition, there is a _bash_ file called ```provisioner.sh``` that is automatically executed during the creation of the VM and which has the purpose of installing the necessary software packages and making some configurations inside the newly created VM.

### Vagrant - Usage
To use vagrant you need to open a terminal in the ```vagrant``` folder and type one of the commands below, the one that's right fo you :-)

| Name | Vagrant Command |
| ---- | --------------- |
| Up | vagrant up |
| Provision | vagrant provision |
| Suspend | vagrant suspend |
| Halt | vagrant halt |
| Reload | vagrant reload |
| Destroy | vagrant destroy |
| Status | vagrant status |
| Connect | vagrant ssh |

### Vagrant - Example of usage
In this example I show the commands to start and connect to the VM using _Vagrant_. Once connected to the VM you are in a fully functional, albeit minimal, GNU/Linux distribution. At the end of the work, remember to logout from the VM and turn it off.

```bash
# you are on your pc
gianni@nolok ~/workspace/projects/ttf $ cd vagrant
gianni@nolok ~/workspace/projects/ttf/vagrant $ vagrant up
gianni@nolok ~/workspace/projects/ttf/vagrant $ vagrant ssh
# now you are connected to the VM and the next commands will be execute inside VM
alpine38:~$ 
# remenber to logout from the VM
alpine38:~$ logout
# you are back on your pc
gianni@nolok ~/workspace/projects/ttf/vagrant $ vagrant halt
```

## License
This project is licensed under the GPL-v3 License - see the LICENSE.md file for details
