export class Product {
  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  private _price: number = 0;
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  private _placeholderPicture: string;
  public get placeholderPicture(): string {
    return this._placeholderPicture;
  }
  public set placeholderPicture(value: string) {
    this._placeholderPicture = value;
  }
  private _colors: Color[];
  public get colors(): Color[] {
    return this._colors;
  }
  public set colors(value: Color[]) {
    this._colors = value;
  }
  private _category: string;
  public get category(): string {
    return this._category;
  }
  public set category(value: string) {
    this._category = value;
  }
  constructor(data?: {
    id?: number;
    name?: string;
    price?: number;
    colors?: Color[];
    placeholderPicture?: string;
    category?: string;
  }) {
    if (!data) {
      data = {};
    }
    if (typeof data.id !== 'undefined') {
      this.id = data.id;
    }
    if (typeof data.name !== 'undefined') {
      this.name = data.name;
    }
    if (typeof data.price !== 'undefined') {
      this.price = data.price;
    }
    if (typeof data.colors !== 'undefined') {
      this.colors = data.colors;
    }
    if (typeof data.placeholderPicture !== 'undefined') {
      this.placeholderPicture = data.placeholderPicture;
    }
    if (typeof data.category !== 'undefined') {
      this.category = data.category;
    }
  }
}
interface Color {
  name: string;
  picture: string;
}
