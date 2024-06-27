import { Entity } from '../entities/entity';
import { InMemoryRepository } from './in-memory.repository';
import { SearchableRepositoryInterface } from './searchable-repository-contracts';

export abstract class InMemoryRepositorySearchable<E extends Entity>
  extends InMemoryRepository<E>
  implements SearchableRepositoryInterface<E, any, any>
{
  search(prop: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
