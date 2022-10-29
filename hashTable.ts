/**
 * Hash table
 * in javascript can be {}, new Map, new Set
 */
class HashTable {
  private table: Map<string, unknown>;

  constructor(value?: any) {
    this.table = new Map(value);
  }

  protected get(value: string) {
    return this.table.get(value);
  }

  protected set(key: string, value: unknown) {
    this.table.set(key, value);
  }
}
