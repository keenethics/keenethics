Author: Keenethics
Title: Docker: 5 Cases When You Should Not Use it
Subtitle: Docker: 5 Cases When You Should Not Use it - Keenethics Blog
Meta title: Docker: 5 Cases When You Should Not Use it - Keenethics Blog
Meta description: There are many good things about Docker. This containerization fellow manages to pack, ship, and run applications as a lightweight, portable, self-sufficient LXC container. Docker is great for businesses of all sizes.
Categories: Tech
Preview image: /static/posts/docker-preview.jpg

![Heroes](/static/posts/docker-in-article.jpg)

There are many good things about Docker. This containerization fellow manages to pack, ship, and run applications as a lightweight, portable, self-sufficient LXC container. Docker is great for businesses of all sizes. It eliminates the “it works on my machine” problem when you’re working on a piece of code in a small team while enterprises can use Docker to build Agile software delivery pipelines to ship new features faster and more securely. With its built-in containerization system, Docker is an excellent tool for clusterization and cloud computing. Sounds too good to be true, right? Well, there are still several cases when your project won’t benefit from Docker. Here are five of them.

## Docker Is Not a Speed Booster

Docker containers are smaller and require fewer resources than a virtual machine with a server and a database. But it will use as much of a given system resource as the host’s kernel scheduler will allow. And don’t expect it to speed up an application in any way. Docker might even cause it to slow down. You’d better set limits on how much memory, CPU or block IO a container can use. Otherwise, if the kernel detects that the host machine’s memory is running too low to perform important system functions, it could start killing important processes. And if the wrong process is killed (including the Docker itself), it can lead to system instability. Unfortunately, Docker adjustments to the out-of-memory priority on the Docker daemon don’t solve this issue.
An additional layer between an application and the operating system could also result in speed reduction. However, the decrease will be insignificant as Docker containers are not fully isolated and do not contain a complete operating system, unlike any virtual machine.

## Docker Is Not a Security Problem Solver

While isolated processes in containers promise improved security, all containers share access to a single host operating system. It means that you risk to run Docker containers with incomplete isolation and any malicious code can get access to your computer memory. Αlso, it’s a popular practice to run many containers in a single environment, making it more predisposed to the Resource Abuse type of attacks if you don’t limit the resource container capabilities. For maximum efficiency and isolation, each container should address one specific area of concern.
Another issue is Docker’s default configuration where users are not namespaced. Running applications with Docker imply running the Docker daemon with root privileges which means any process that breaks out of the container will have the same privileges on the host as it did in the container. Running your processes inside the containers as non-privileged users can’t guarantee security and depends on the capabilities you add or remove. To mitigate the risks of container breakout, do not download ready-to-use containers from untrusted sources.

## Docker Is Not a Friend of Desktop GUI Applications

Docker is mainly intended for isolated containers with console-based applications. This means that GUI-based applications are not in priority and their support will rely on the specific case and application. All because Windows containers are based on either Nano or Core Server which don’t allow users to start up a GUI-based interface or an RDP in the Docker container. But you can still [run GUI-based applications](https://www.facebook.com/flx/warn/?u=https%3A%2F%2Fhub.docker.com%2Fr%2Ftzutalin%2Fpy2qt4%2F&h=ATN_JcyXEy9xgHOGoIW5S2JnYxGP6E_xKm1I8UMqETY0Ie1rmZvusyW91v-7pcJakkmq1O6UOtkv8pezX5zxofLbJRby6TFB1ObHsHCeMi8abfA0_Bh2-7Gv61lnTZVVKk5sdrXPujcQuEQ) developed with Python and the QT framework in a Linux container.

## Docker Won’t Light Up Your Code Development and Debugging

Docker was created by developers and for developers. It provides environment stability, meaning that a container on the development machine will work exactly the same on staging, production or any other environment. This eliminates the problem of various program versioning in different environments. With Docker’s help, you can easily add a new dependency to your application and no developer from your team will need to repeat this manipulation on their machine - everything will be up and running in the container and distributed to the entire team. At the same time, you have to do some extra setup to code your app in Docker (you can find several ways to get your code into a container here). Same thing with debugging: you have to configure logs output and set up debugging ports (here are some helpful links to help you do that: “[Live Debugging with Docker](https://blog.docker.com/2016/07/live-debugging-docker/)” and “[Ten Tips for Debugging Docker Containers](https://medium.com/@betz.mark/ten-tips-for-debugging-docker-containers-cde4da841a1d)”). You may also need to map ports for your applications and services in containers. So, if you have a complicated and tedious deployment process, Docker will help you out a lot, but if you have a simple app - it just adds unnecessary complexity.

## Docker Containers Can't Use Different Operating Systems or Kernels

With virtual machines, the hypervisor can abstract an entire device and you can use Microsoft Azure to run both instances of Windows Server and Linux Server at the same time. 
Docker image, however, requires the same operating system it was created for. You know, if an image was created based on Linux Ubuntu, it will only run on the exact same Ubuntu. This means that if an app is developed on Windows machines but the production runs on some Linux, you won’t be able to effectively use Docker. It is sometimes easier to simply set up a server if you have several static apps.

<p style="margin-top: 35px;">We at Keenethics enjoy working with Docker and often use it when developing our applications. Despite some drawbacks, you can easily use it to run and manage apps side by side in isolated containers. Docker also provides a clean (original) isolation environment for each test, making it an important and useful tool for automation testing. Just be mindful and aware of the pitfall configuring swap on your Docker hosts. Have fun working with Docker!</p>