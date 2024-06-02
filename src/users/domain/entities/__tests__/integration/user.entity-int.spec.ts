import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';
import { EnitityValidationError } from '@/shared/domain/erros/validation-error';

describe('User Entity integration tests', () => {
  describe('Constructor method', () => {
    it('Should throw an error when creating a user with invalid name', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        name: null,
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: '',
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: 'a'.repeat(256),
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);
    });

    it('Should throw an error when creating a user with invalid email', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        email: null,
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: '',
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: 'a'.repeat(256),
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);
    });

    it('Should throw an error when creating a user with invalid password', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        password: null,
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: '',
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: 'a'.repeat(101),
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);
    });

    it('Should throw an error when creating a user with invalid createdAt', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        createdAt: '2023' as any,
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);

      props = {
        ...UserDataBuilder({}),
        createdAt: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrow(EnitityValidationError);
    });
  });
});
