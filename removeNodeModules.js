let fs = require('fs');
let path = require('path');


let deleteNodeModules = (dir) => {
    let contents = fs.readdirSync(dir);
    for (let item of contents) {
        let itemPath = path.join(dir, item)
        
        if (fs.lstatSync(itemPath).isDirectory()){
            // console.log(item, 'is directory')
            if (item === 'node_modules'){
                console.log('nodeModules found in ', dir, 'Deleting ...');
                fs.rmSync(itemPath, { recursive: true, force: true })
            }
            else {
                deleteNodeModules(itemPath)
            }
        }
    }

}



// console.log(fs.readdirSync('/home/adwait/myFolder'))
// deleteNodeModules('/home/adwait/myFolder')
deleteNodeModules('/home/adwait/myFolder')

 
// fs.rmSync(dir, { recursive: true, force: true });