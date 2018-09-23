import { Pipe , PipeTransform } from "@angular/core";

@Pipe({
    name:"storageunit"
})
export class StorageUnitPipe implements PipeTransform {
    transform(value: number): string {
        return value + "GB";
    }
}