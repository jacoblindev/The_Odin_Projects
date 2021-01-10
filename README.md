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
