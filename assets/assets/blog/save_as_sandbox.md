# Escaping the Sandbox in Mobile Apps
>--pampanet.org 

## Using Files since EPOCH

Files have been inherent to Computer Systems and Software Applications since its inception. We even named an operating system out of a storage device, a Disk Operating System (a.k.a DOS). In Unix Systems, files even follow a standard set of operations called POSIX

For a long time, file systems have played key role in our everyday operations with computers. Everything was a File, so everything we did was also transcribed to one. System configuration, text documents, images, sounds, data bases, archives, etc.

But software companies wanted to remove the possibility for users to manage their own files, so the File Systems we all knew how to operate with and used in our everyday operations either directly or via another software, was about to come to an end.

Mobile, Embedded and Distributed Systems were going to introduce us to the concept of Isolation and Sandboxing.

## Along came the Sandbox

A sandbox is a set of features 

- Process Isolation
- Permission Access Control (usually RBAC)
- InterProcess Communication (IPC) Protocol

for building an isolated application environment, designed so that an application installed by a user, who's not an administrator, can store the app's configuration and other files created by end users (documents, images, sounds, etc), without affecting other applications or the operating system in case the application produces corrupted or infected files.

A sandbox is often complemented with a permission system, most likely an [RBAC (Role Based Access Control) system](https://www.cloudflare.com/es-es/learning/access-management/role-based-access-control-rbac/), that doesn't allow applications to jump outside their container so that in the event of a malicious software trying to write other directories, the operation is denied unless the app is a system administrator program having full disk access.

So, in conclusion, a sandbox isolates an application's files and resources to provide more granular security to the containing Operating System.

With an application sandboxed, a user can expect to save files only within the sandbox, as part of their app specific documents directory, or cache, or database, or user preferences/configuration file.

But there must be a way to export these files outside the sandbox without compromising the Operating System

## Nothing is Saved (just shared)

In order to export these files from an application like Pampanet's Archiver, we use the mobile term "share". When you share a file, you are telling the operating system your intent of exporting the current object you are using, which could be a file, a simple text, an image, a sound, etc, delegating the responsibility of accepting this object in another sandbox managed by the recepient application.