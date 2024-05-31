Glob patterns are string patterns used to match file and directory paths based on wildcard characters and other pattern syntax.
- *.js matches all files with a .js extension.
- file?.txt matches file1.txt, fileA.txt, but not file10.txt. 
- file[1-3].txt matches file1.txt, file2.txt, and file3.txt. 
- {index,main}.html matches index.html and main.html.
- src/**/test.js matches src/test.js, src/lib/test.js, src/lib/utils/test.js, etc.

Flat config wants every config to be in a single file rather than in each sub-folder.

### Language Options
https://eslint.org/docs/latest/use/configure/language-options
ecmaVersion (default: "latest")
sourceType (default: "module") -