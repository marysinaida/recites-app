export class Quote {
    showRecite: boolean;
    constructor(public id: number,public name: string,public recite: string ,public completeDate: Date){
      this.showRecite=false;
}
}
