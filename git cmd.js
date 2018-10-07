/**********************************************
 * 
 * Database
 *  0) Commit
 *      Regular Commit
 *      Merge Commit.   multiple parents.
 *  1) Branches
 *      master
 *      others
 *  2) HEAD
 *  3) Connected
 *  4) Current
 *  5) Remote, Local, Central, Reference[local,remote,origin?].History
 *  6) Awre
 *  7) Ahead  [*****]
 *  8) Reference(branchName, ID, node~4, tag, remote-branchName,SHA-1 ID)
 *  9) Referencing and Garbiging.
 * 
 * 
 * Terminology
 *  1) Origin
 * 2) Local / Remote
 * 
 *   Checkout/Create
 *   Workflow
 *  Three "Trees": Working Directory, the Index, the HEAD.
 * 
 *  Adding/Staging/Collecting changes
 *  Packing up commit. SealingID   [up ****]
 *  Share the changey.    push
 *  Receive the sharing   pull
 * 
 * 
 * 
 * 
 * 
 * Q & A
 *  1) History need synchonied? or scattered, Distributed?
 *  2) The system is based on file, so high-rate commits will cause ?
 * 
 * http: //tom.preston-werner.com/2009/05/19/the-git-parable.html
 */

https: //betterexplained.com/articles/a-visual-guide-to-version-control/
    https: //changelog.com/posts/git-resources-for-visual-learners

    TRAINNING AND STRENGTH COURSE AFTER THE BIG PICTURE
http: //onlywei.github.io/explain-git-with-d3/#checkout

    /********************* Concepts =====================
     * 
     * (1) 2picute + 
     * (2) conceptual-emphasizing training
     * (3) cli lab + gui lab.
     * 
     * https: //www.cnblogs.com/cheneasternsun/p/5952830.html
     * https: //agripongit.vincenttunru.com/
     * https: //marklodato.github.io/visual-git-guide/index-en.html
     * http: //onlywei.github.io/explain-git-with-d3/#revert
     * https: //learngitbranching.js.org/
     * http: //ndpsoftware.com/git-cheatsheet.html#loc=remote_repo;
     * 
     * 
     * 
     * git log [--pretty=oneline] 
     * 
     * git stash
     * 
     * 
     * [WHERE-On + Where-Go] [Explict or Detached]
     * git commit *           -m "discription"
     * git commit -f filename -m "information"
     * git commit -a          -m ""            [add + commit] [shortcut based on tracked]
     * git commit -amend ??????? *       [replacing, Happening On end-level node]
     * git vm fileName
     * git mv fileName.
     * 
     * 
     * git branch branchName             [tagging]   [*****]
     * git branch                        [listing]
     * git branch -d branchName          [deleting a string] 
     * 
     * 
     * 
     * [---Local + Remote Reference---]
     * git checkout branchName           [local-switching + checkingout]
     * git checkout 7bit-ID              [local-switching + checkingout + detaching]
     * git checkout SHA-1-ID
     * git checkout HEAD~[2 - ? ]        [local-switching + checkingout + detaching]
     * git checkout Node~[2 - ? ]        [local-switching + checkingout + detaching]
     * git checkout Tag                  [???????]
     * git checkout -b branchName        [branding] 
     * [---for Filing---]
     * git checkout branchName [-p] file [NO-switching + file-LEVEL-checkingout]
     * [---for---]
     * git checkout ???                  [out from index to working directory]
     * 
     * 
     * 
     * [---Undoing---]
     * git reset                           [resetting + opt-checkingout][--soft|--mixed|--hard]
     * git reset commitNode                [resetting + opt-checkingout] [commit mode]
     * git reset [commitNode] [-p] fileNames [*****???* + optional-checkingout] [file mode]
     * git clean -df                       [restoring to origin]
     * 
     * 
     * 
     * 
     * git diff
     * git diff HEAD/branchName
     * git diff --cached
     * git diff CommtID OtherCommitID
     * 
     * 
     * 
     * git merge branchName.                [Consistency-Checking]
     * git merge otherBranchName
     * 
     * 
     * 
     * git rebase master
     * git rebase onto master branchName     [exclusive]
     * git rebase --interactive
     * 
     * 
     * 
     * [---patching---]
     * git cherry-pick branchName    
     * 
     * 
     * 
     * 
     * git add remote ???
     * git fetch      
     * git pull ???
     * git pull ???
     * 
     * 
     * 
     * 
     * 
     * 
     * DETACHED HEAD???? about lifecicle, timming? about branchName tagging?
     * ONLY one working directory, but multiple branches.
     * 
     * 
     * revert?
     */


    //======= help =======
    git help



https: //www.youtube.com/watch?v=7Ab5DIWYUMw&list=PL6gx4Cwl9DGAKWClAD_iKpNC0bGHxGhcx&index=4
    https: //www.youtube.com/watch?v=Uf_a2woCsSU&index=2&list=PLXIYiZniwnF1NpAp0jW8biH9Fzqc6kH6G
    https: //www.youtube.com/watch?v=Uf_a2woCsSU&index=2&list=PLXIYiZniwnF1NpAp0jW8biH9Fzqc6kH6G
    https: //www.youtube.com/watch?v=HVsySz-h9r4&list=PLPRAep8Zsp3bDsJSuEEkQfXrFM0szX__i

    https: //www.youtube.com/watch?v=ZDR433b0HJY


    tondona of alias will boost your productivity.





    https: //learngitbranching.js.org/
    http: //onlywei.github.io/explain-git-with-d3/#checkout-b
    https: //magit.vc/screenshots/
    https: //marklodato.github.io/visual-git-guide/index-en.html
    https: //agripongit.vincenttunru.com/


    //======== configuration in 3 types ===========
    //W: git config [where] key value
    git config[--global / --system] key, value


//R: git config --list   [by default all config files]
//R: git config [where] --list
//R: git config key




//========= 
PWD //print workding directory.
CD~ //home

    cd..
ls
