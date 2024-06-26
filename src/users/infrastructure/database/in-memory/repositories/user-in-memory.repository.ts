import { ConflcitError } from '@/shared/domain/erros/conflict-error copy';
import { NotFoundError } from '@/shared/domain/erros/not-found-error';
import { InMemoryRepositorySearchable } from '@/shared/domain/repositories/in-memory-searchable.repository';
import { UserEntity } from '@/users/domain/entities/user.entity';
import { UserRepository } from '@/users/domain/repositories/user.repository';

export class UserInMemoryRepository
  extends InMemoryRepositorySearchable<UserEntity>
  implements UserRepository
{
  async findByEmail(email: string): Promise<UserEntity> {
    const entity = this.items.find(item => item.email === email);
    if (!entity) {
      throw new NotFoundError(`Entity not found using email ${email}`);
    }
    return entity;
  }

  async emailExists(email: string): Promise<void> {
    const entity = this.items.find(item => item.email === email);
    if (entity) {
      throw new ConflcitError(`Email address already used ${email}`);
    }
  }
}
