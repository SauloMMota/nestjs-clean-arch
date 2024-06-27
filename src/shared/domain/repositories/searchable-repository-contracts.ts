import { Entity } from '../entities/entity';
import { RepositoryInterface } from './repository-contracts';

export type SortDirection = 'asc' | 'desc';
export type SerachProps<Filter = string> = {
  page?: number;
  perPage?: number;
  sort?: string | null;
  sortDir?: SortDirection | null;
  filter?: Filter | null;
};

export class SearchParams {
  protected _page: number;
  protected _perPage = 15;
  protected _sort: string | null;
  protected _sortDir: SortDirection | null;
  protected _filter: string | null;

  constructor(props: SerachProps) {
    this._page = props.page;
    this._perPage = props.perPage;
    this._sort = props.sort;
    this._sortDir = props.sortDir;
    this._filter = props.filter;
  }

  get page() {
    return this._page;
  }

  private set page(value: number) {}

  get perPage() {
    return this.perPage;
  }

  private set perPage(value: number) {}

  get sort() {
    return this.sort;
  }

  private set sort(value: string | null) {}

  get sortDir() {
    return this.sortDir;
  }

  private set sortDir(value: SortDirection) {}

  get filter() {
    return this.filter;
  }

  private set filter(value: string | null) {}
}

export interface SearchableRepositoryInterface<
  E extends Entity,
  SearchParams,
  SearchOutput,
> extends RepositoryInterface<E> {
  search(props: SearchParams): Promise<SearchOutput>;
}
