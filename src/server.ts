import 'zone.js/dist/zone-node';
const{AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../dist-server/main.bundle');
import { renderModuleFactory} from '@angular/platform-server';
import * as path from 'path';
import * as fs from 'fs';

// console.log(AppServerModuleNgFactory,LAZY_MODULE_MAP );
// console.log(renderModuleFactory);
// console.log("Hello World");

const indexPath = path.resolve(__dirname, '../dist/index.html');
const index = fs.readFileSync(indexPath).toString();
console.log(index);

(async()=>{
    const html= await renderModuleFactory(AppServerModuleNgFactory,{
        url: '/',
        document: index
        //document: '<app-root></app-root>'
    });
    console.log(html);
})();