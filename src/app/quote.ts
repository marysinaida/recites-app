export class Quote {
    showRecite: boolean;
  length: number;
    constructor(public id: number,public name: string,public author:string ,public upvote:number,public downvote:number,public completeDate: Date ){
      this.showRecite=false;
}
}
