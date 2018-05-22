import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'capitalize'

})
export class capitalizePipe implements PipeTransform{
    transform(value:any,args?:any){

        if(!value){
            return null;
        }
        let titleList = value.split(' ');
        let newTitle = [];
        for(let title in titleList){

            console.log('title == '+titleList[title]);
            let _title = ''+titleList[title];
            newTitle.push((!!_title) ? _title.charAt(0).toUpperCase() + _title.substr(1).toLowerCase() : '');
        }
        return newTitle.join(' ');
    }
}