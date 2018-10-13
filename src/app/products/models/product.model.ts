export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public capacity: number,
    public isAvailable: boolean,
    public description?: string,
    public price?: number,
    public quantity?: number,
    public cdate?: string,
  ) {}
}

