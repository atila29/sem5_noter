# Lektion 2
*8/9/16*
<br>
## input and output Redirection
1. STDIN &#8594; channel 0
2. STDOUT &#8594; channel 1
3. STDERR &#8594; channel 2

## pibes
example: pibes all processes into grep and finds vim.
```shell
ps aux | grep vim
```
example: cut with the delimeter : and returns the first occurence.
```shell
cat /etc/passwd | cut -d: -f1
```
## file permission
![](./linux_62501/pics/file_permission0.png)
This is backed by binaries, so:
permission 347 is equal to 011100111

umask is the opposite of chmod, it's a way to decrease permissions.
used for setting the standard permissions.

### Special permissions
Three special types of permissions are available for executable files and public directories. When these permissions are set, any user who runs that executable file assumes the user ID of the owner (or group) of the executable file.

#### setuid Permission
When set-user identification (setuid) permission is set on an executable file, a process that runs this file is granted access based on the owner of the file (usually root), rather than the user who is running the executable file. This special permission allows a user to access files and directories that are normally only available to the owner. For example, the setuid permission on the passwd command makes it possible for a user to change passwords, assuming the permissions of the root ID:
```shell
-r-sr-sr-x   3 root     sys       104580 Sep 16 12:02 /usr/bin/passwd
```
#### setgid Permission
The set-group identification (setgid) permission is similar to setuid, except that the process's effective group ID (GID) is changed to the group owner of the file, and a user is granted access based on permissions granted to that group. The /usr/bin/mail command has setgid permissions.
When setgid permission is applied to a directory, files that were created in this directory belong to the group to which the directory belongs, not the group to which the creating process belongs. Any user who has write and execute permissions in the directory can create a file there. However, the file belongs to the group that owns the directory, not to the user's group ownership.
```shell
-r-x--s--x   1 root     mail       63628 Sep 16 12:01 /usr/bin/mail
```
#### Sticky Bit
The sticky bit is a permission bit that protects the files within a directory. If the directory has the sticky bit set, a file can be deleted only by the owner of the file, the owner of the directory, or by root. This special permission prevents a user from deleting other users' files from public directories such as /tmp:
```shell
drwxrwxrwt 7  root  sys   400 Sep  3 13:37 tmp
```

## Users and User management
most users on the system only run services, they can't login and doesn't have a home directory.
example on user:
```shell
$ cat /etc/passwd | grep git
git:x:619:619:git daemon user:/:/bin/bash
```
here git is the username, x is the password which is moved to another file and encrypted, and x is just the placeholder.
the next is the user id, here 619. next is their primary group id.
next is the geckos feed, which is information about the user.
Last is the home directory.
<br>
```shell
sudo cat /etc/shadow | head -4 && sudo cat /etc/shadow | tail -4
root:$6$root$g3v/Qn88jbzgbcn5aJ3m1mP7kdkasllmwlmMp4C/eFZ7cG51kXI412ndaksDW0al0jXuqEcG1zu8YTcXXm/:16998::::::
bin:x:14871::::::
daemon:x:14871::::::
mail:x:14871::::::
postfix:!:17016:0:99999:7:::
snort:!:17016:0:99999:7:::
sslh:!!:17016::::::
nvidia-persistenced:!:17028:0:99999:7:::
```
