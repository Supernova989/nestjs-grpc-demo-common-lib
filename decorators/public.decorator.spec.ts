import * as common from '@nestjs/common';
import { IS_PUBLIC_KEY, Public } from './public.decorator';

jest.mock('@nestjs/common');

describe('Decorator "Public"', () => {
  it('decorates with proper key and value', () => {
    jest.spyOn(common, 'SetMetadata');
    Public();
    expect(common.SetMetadata).toHaveBeenCalledWith(IS_PUBLIC_KEY, true);
  });
});
