export class Collection.Model {
    constructor(
      public title: string,
      public description: string,
      public isPrivate: boolean,
      public isDisabled: boolean,
      public images: [],
      public ownerID: number,
      public ratings: number,
    ) { }
}
