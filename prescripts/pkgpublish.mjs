import { writeFile } from 'fs';
const pkgfile = {
    "name": "sinzmise-cetastories",
    "version": "1.6.0-"+new Date().getTime()
}
writeFile('./public/package.json', JSON.stringify(pkgfile), function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Package.json file is created successfully.");
})