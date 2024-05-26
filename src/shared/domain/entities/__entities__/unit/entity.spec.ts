import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 1 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity.id).not.toBeNull();
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 1 };
    const id = '2f4b0c50-3f30-47d2-b8a2-8b7d4046b95b';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity.id)).toBeTruthy();
    expect(entity.id).toBe(id);
  });

  it('Should convert an entity to a json', () => {
    const props = { prop1: 'value1', prop2: 1 };
    const id = '2f4b0c50-3f30-47d2-b8a2-8b7d4046b95b';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id: id,
      ...props,
    });
  });
});
