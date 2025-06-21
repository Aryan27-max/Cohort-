1. pwd -------------------Present Working Directory path
2. ls -------------------- To view directories and files in a folder
3. ls -R ----------------- To view subdirectories of directories.
4. ls -t
5. ls -l ------------------To view permissions, last modified date, size in bytes of particular folder.
6. ls -lt
8. ls -la -----------------To view all items including hidden items.
9. ls -lRa
10. ls -lr -----------------shows in reverse order.
11. ls -s ------------------To view size.
12. ls *.js ----------------To view all the js files in that folder.
13. ls Zoo* ----------------To view all the files with "Zoo" in its name.
14. ls .. ------------------list all directories and folder.

15. cd ---------------------------Go to
16. cd .. ------------------------Go to previously directory.
17. cd ../../ --------------------Go back twice.
18. touch ------------------------To create a file. {touch a.js}
19. cat --------------------------To view what is inside in a file. {cat a.js}
20. cat > a.txt ------------------To write something in a file. ctrl + D to save and exit. ctrl + C to exit.
21. cat >> a.txt

22. mkdir ------------------------------create a directory of name test. {mkdir test}
23. mkdir test && cd test --------------create a new directory and go inside that directory.
24. mkdir -p ---------------------------To create directory inside directory. {mkdir -p frontend/scripts}
25. mv ---------------------------------To move files. {mv script.js runtime_script.js}
26. mv filepath/newname ----------------To rename a file.
27. cp ---------------------------------To copy files {cp filepath new filepath}
28. cp -r ------------------------------To copy a directory.
29. rm filename ------------------------To delete a file.
30. rm -r folderpath -------------------To delete a folder.
31. chmod ugo-rwx ---------------------------To add permission to a file.
31. chmod -R ugo-rwx ------------------------To add permission to a folder.
32. chmod u+x filename
33. chmod g+wx filename
34. chmod u-x filename
1-x, 2-w, 4-r
35. chmod 664 foldername

36. echo 'Hello World'---------------------------To display a certain message.
37. head filename -------------------------------View us the first 10 rows of a file.
38. tail filename -------------------------------View us the last 10 rows of a file.
39. head -20 filename ---------------------------View the first 20 rows of a file. same goes with tail.
40. tail -n +25 filename | head -n +5 -----------To view custom rows.
41. wc filename ---------------------------------To view linecount, wordcount, charactercount of a file.

42. grep "one" filename ------------------where "one" has been used in the file.
43. grep "one" filename | wc -l ----------how many times "one" has been used in the file.
44. grep -c "one" filename ---------------how many times "one" has been used in the file.
45. grep -h "one" filename ---------------where "one" has been used in the file. (case sensitive)
46. grep -hi "one" filename --------------where "one" has been used in the file. (not case sensitive)
47. grep -hir "one" directoryname --------where "one" has been used in the folder.
48. grep -hin "one" filename -------------where "one" has been used in the file inc line numbers. (not case sensitive)
49. grep -hinw "one" filename ------------where "one" has been used inside a word also individually. {colone, one, One} (case sensitive)
50. grep -o "one" filename ---------------only gives us the matched part.
51. grep -w "one" filename ---------------where "one" has been used in the file.
52. history ------------------------------to view all the command that i've used.
53. bash filename
54. grep "ERROR" filename ----------------will view all the error messages in that file.
55. grep -v "INFO" filename
56. grep -A 5 ERROR filename -------------to view rows after the occurance of ERROR text in a file
56. grep -B 5 ERROR filename -------------to view rows before the occurance of ERROR text in a file
56. grep -C 5 ERROR filename -------------to view rows before and after the occurance of ERROR text in a file.

57. sed -n '/ERROR/ p' filename ------------------to print lines with ERROR text.
58. sed 's/ERROR/CRITICAL' filename --------------Replace ERROR with CRITICAL in the file.
59. sed -ibackup 's/ERROR/CRITICAL/' filename ----Create a backup of the file.
60. sed '3 s/CRITICAL/VERYCRITICAL/' filename ----Replace CRITICAL with VERYCRITICAL in line number 3.
60. sed '3,5 s/ERROR/CRITICAL/' filename ---------Replace CRITICAL with VERYCRITICAL in line number 3 to line number 5.
60. sed -n '3,/ERROR/ p' filename

61. awk '/ERROR/{print $0}' filename -------------------------to print lines with ERROR text.
62. awk '{gsub(/ERROR/, "CRITICAL")}{print}' filename---------Replace ERROR with CRITICAL in the file.
63. awk 'BEGIN {print "LOG SUMMARY\n--------------"} {print} END {print "--------------\nEND OF LOG SUMMARY"}' filename ---------add text in the beginning and ending of a file.
64. awk '{print $1, $2}' filename ----------------------------Print 1st and the 2nd column of the data (file).
65. awk -F "," '{print $1, $2}' filename
66. awk '{count[$2]++} END {print count["ERROR]}' filename ---Count the occurance of ERROR in second column of the file.
67. awk '{ if ($1 > 1598863888 ) {print $0} }' log.txt -------view the rows after 1598863888 in first column.