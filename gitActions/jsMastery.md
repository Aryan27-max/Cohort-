# 📘 GIT COMMANDS — WELL ORGANISED NOTES

---

# 🔗 REMOTE REPOSITORY (ORIGIN)

## ✅ Check Connected Repository

```bash
git remote -v
```

## 🔁 Change Existing Origin

```bash
git remote set-url origin <repo-link>
```

---

# 📤 COMMIT & PUSH (EXISTING REPO)

```bash
git add .
git commit -m "your commit message"
git push origin main
```

---

# 🆕 CREATE NEW REPO & PUSH CODE

## 🪜 Step-by-step

```bash
cd your-folder

git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/username/repo.git

git branch -M main

git push -u origin main
```

---

# ⚡ QUICK COMMIT SHORTCUT (ALIAS)

## Create shortcut once

```bash
git config --global alias.c "commit -am"
```

## Use

```bash
git c "Commit 1"

git c "Commit 2"

git push
```

---

# 📜 VIEW COMMIT HISTORY

```bash
git log
```

---

# ⏪ GO BACK TO OLD COMMIT (TEMP VIEW)

```bash
git checkout <commit-hash>
```

Return:

```bash
git checkout main
```

---

# 🌿 BRANCH COMMANDS

## Switch branch

```bash
git checkout branch-name
```

## Force switch (if stuck)

```bash
git checkout -f branch-name
```

## Create & switch

```bash
git checkout -b new-branch
```

---

# 🔄 SYNC LOCAL WITH REMOTE

```bash
git pull
```

---

# 🚑 RESET COMMANDS (LIFESAVERS)

## 🟢 Soft Reset

Keeps staged changes:

```bash
git reset --soft <commit-hash>
```

---

## 🟡 Mixed Reset

Keeps files but unstaged:

```bash
git reset <commit-hash>
```

---

## 🔴 Hard Reset

Deletes everything after commit:

```bash
git reset --hard <commit-hash>
```

---

# 📦 GIT STASH (TEMP SAVE WORK)

```bash
git stash

git stash list

git stash apply stash@{0}
```

---

# 🚀 ADVANCED BRANCH CONTROL

## 🔥 Force Push Branch → Main

```bash
git checkout your-branch

git push origin your-branch:main --force-with-lease
```

✔ Safely replaces main with your branch.

---

# 🧹 Make Branch Same As Main

```bash
git checkout your-branch

git fetch origin

git reset --hard origin/main
```

---

# 💻 Make Local System Same As GitHub

```bash
git fetch origin

git checkout main

git reset --hard origin/main

git clean -fd
```

---

# 🔁 REBASE (MOST IMPORTANT WORKFLOW)

## 👉 What Rebase Does

Moves your commits on top of the latest main.

Benefits:

- ✔ Removes "behind commits"
- ✔ Keeps history clean
- ✔ Avoids unnecessary merge commits

---

# ✅ Rebase Cleanly

```bash
git checkout your-branch

git fetch origin

git rebase origin/main
```

---

## If Conflict Happens

```bash
git add .

git rebase --continue
```

---

## ⬆ Push After Rebase

```bash
git push --force-with-lease
```

---

# 🏆 PERFECT DAILY DEV FLOW (USE THIS ALWAYS)

```bash
git checkout your-branch

git fetch origin

git rebase origin/main

git push --force-with-lease
```

Result:

✔ No behind commits  
✔ Clean history  
✔ No merge mess  

---

# 📌 GOLDEN RULES

✅ Rebase feature branches  

✅ Use:

```bash
--force-with-lease
```

instead of:

```bash
--force
```

❌ Don’t force push shared production branches  

✅ Reset only when you are sure  

---