export class TempConverter {
    static convertFtoC(temp: number | string) : string {
        let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
        // return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }
}