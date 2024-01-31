# Drone concepts
1. Pipeline and steps (All steps are comtainer only in type docker)
2. Current working directory. /drone/src
3. Communication between steps via name
4. How are the services hosted in the url? using name
4. steps running in sync but can be made async.`"detach":True,`
5. Volumes
    - /drone/src is shared among all steps
    - To share other volume, need to define the path as share volume in pipe level