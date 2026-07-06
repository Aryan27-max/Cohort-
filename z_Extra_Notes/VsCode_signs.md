# 📘 Git File Status Symbols

| Symbol             | Meaning                   | Description                                                                         |
| ------             | -------                   | ----------- |
| `M`                | **Modified**              | File is being tracked, but has unsaved changes since the last commit                |
| `U`                | **Untracked**             | Git is not tracking this file yet (use `git add` to start tracking it)              |
| `D`                | **Deleted**               | File was deleted from the working directory but still tracked in Git                |
| `R`                | **Renamed**               | File has been renamed since the last commit                                         |
| `C`                | **Copied**                | File is a copy of another tracked file                                              |
| `??`               | **Untracked (CLI)**       | Shown in `git status` for files Git doesn't know about yet (same as `U` in VS Code) |
| `!`                | **Ignored**               | File is ignored via `.gitignore` |

---

# Quick Summary

- `M` → Modified file  
- `A` → Added to staging  
- `U` / `??` → New untracked file  
- `D` → Deleted file  
- `R` → Renamed file  
- `C` → Copied file  
- `!` → Ignored by Git  

---