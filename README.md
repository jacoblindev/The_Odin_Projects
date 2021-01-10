# Git basic commands

Follow The Odin Project to practice git.

- Clone your repo to your local directory with the following command.

```shell
git clone <copy your repo's SSH here>
```

- Create a README file by `touch` it

```shell
touch README.md
```

- View the changes of the directory

```shell
git status
```

```shell
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md

nothing added to commit but untracked files present (use "git add" to track)
```

- Then stage all the Untracked files in current directory ( . )

```shell
git add .
git status
```

```shell
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md
```

- Commit those files

```shell
git commit -m "Add README.md"
```

```shell
[main (root-commit) bfa0a76] Add README.md
 1 file changed, 3 insertions(+)
 create mode 100644 README.md
```

```shell
git status
```

```shell
On branch main
nothing to commit, working tree clean
```

- Now add another file & change some content of your README file in yoour editor & save. Then check the status again.

```shell
touch Hello_World.txt
code README.md
git status
```

```shell
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	Hello_World.txt
```

- Add README to staging area

```shell
git add README.md
git status
```

```shell
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	Hello_World.txt
```

- Now add the Hello_World file too

```shell
git add .
git status
```

```shell
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   Hello_World.txt
	modified:   README.md
```

- Finally, commit everything

```shell
git commit -m "Add Hello_world.txt & edit README.md"
```

```shell
[main c18c0a9] Add Hello_world.txt & edit README.md
 2 files changed, 116 insertions(+)
 create mode 100644 Hello_World.txt
```

```shell
git log
```

```shell
commit c18c0a9de35910c19d1406045f364a04d8d23ec7 (HEAD -> main)
Author: Jacob <jacoblindev@gmail.com>
Date:   Sun Jan 10 15:25:57 2021 +0800

    Add Hello_world.txt & edit README.md

commit bfa0a762218e275457f4e5a2cbc94987f8fb4960
Author: Jacob <jacoblindev@gmail.com>
Date:   Sun Jan 10 14:43:22 2021 +0800

    Add README.md
```

- Push your work to Github

```shell
git push origin main
```

```shell
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (7/7), 1.16 KiB | 1.16 MiB/s, done.
Total 7 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To github.com:jacoblindev/git_practice_TOP.git
 * [new branch]      main -> main
```
