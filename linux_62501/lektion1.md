# Lektion 1
*1/9/16*

## File system hierachy
![](./linux_62501/pics/file_hierachy.jpg "file system hierachy")
<br><br>
Directory|description
---------|-----------
/ | Primary hierarchy root and root directory of the entire file system hierarchy.
/bin | Essential command binaries that need to be available in single user mode; for all users, e.g., cat, ls, cp.
/boot | Boot loader files, e.g., kernels, initrd.
/dev | Essential devices, e.g., /dev/null
/etc | Host-specific system-wide configuration files
/etc/opt | Configuration files for add-on packages that are stored in /opt/.
/etc/sgml | Configuration files, such as catalogs, for software that processes SGML.
/etc/X11 | Config files for xorg, version 11.
/etc/xml | Configuration files, such as catalogs, for software that processes XML.
/home | Users' home directories, containing saved files, personal settings, etc.
/lib | Libraries essential for the binaries in /bin/ and /sbin/.
/mnt | Temporarily mounted filesystems
/opt | Optional application software packages.
/proc | Virtual filesystem providing process and kernel information as files. In Linux, corresponds to a procfs mount.
/root | Home directory for the root user.
/run | Run-time variable data: Information about the running system since last boot, e.g., currently logged-in users and running daemons.
/sbin | Essential system binaries, e.g., fsck, init, route.
/srv | Site-specific data served by this system, such as data and scripts for web servers, data offered by FTP servers, and repositories for version control systems.
/tmp | Temporary files (see also /var/tmp). Often not preserved between system reboots, and may be severely size restricted.
/usr | Secondary hierarchy for read-only user data; contains the majority of (multi-)user utilities and applications.
/usr/bin | Non-essential command binaries (not needed in single user mode); for all users. Often here you link your own commands.
/usr/include | standard include files.
/usr/lib | Libraries for the binaries in /usr/bin/ and /usr/sbin/.
usr/local | Tertiary hierarchy for local data, specific to this host. Typically has further subdirectories, e.g., bin/, lib/, share/.
/usr/sbin | Non-essential system binaries, e.g., daemons for various network-services.
/usr/share | Architecture-independent (shared) data.
/usr/src | Source code, e.g., the kernel source code with its header files.
/var | Variable files—files whose content is expected to continually change during normal operation of the system—such as logs, spool files, and temporary e-mail files.
/var/cache | Application cache data. Such data are locally generated as a result of time-consuming I/O or calculation. The application must be able to regenerate or restore the data. The cached files can be deleted without loss of data.
/var/lib | State information. Persistent data modified by programs as they run, e.g., databases, packaging system metadata, etc.
/var/lock | Lock files. Files keeping track of resources currently in use.
/var/log | Log files.
/var/mail | users' mailboxes.
/var/opt | Variable data from add-on packages that are stored in /opt/.
/var/run | Run-time variable data. This directory contains system information data describing the system since it was booted.\nIn FHS 3.0, /var/run is replaced by /run; a system should either continue to provide a /var/run directory, or provide a symbolic link from /var/run to /run, for backwards compatibility
/var/spool | Spool for tasks waiting to be processed, e.g., print queues and outgoing mail queue.
/var/tmp | Temporary files to be preserved between reboots.
<br><br><br><br>
## commmon commands
```bash
pwd                           Path to current Directory
cd                            change directory
ls                            list directory
touch                         update timestamp on file, if file doesn't exist creates it
mkdir                         create a directory
echo "foo" > bar.txt          overwrites file
echo "foo" >> bar.txt         append to file
grep foo < bar.txt            finds the line
grep foo << bar.txt
```
