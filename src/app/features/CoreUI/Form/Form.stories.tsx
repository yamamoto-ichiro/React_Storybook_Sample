import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';

import '../../App/Root/Root.scss';
import FormInput from '../FormInput/FormInput';
import TwoColumnGrid from '../TwoColumnGrid/TwoColumnGrid';
import Label from '../Label/Label';
import Button from '../Button/Button';
import Toggle from '../Toggle/Toggle';
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';

export default { title: 'Form' };

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  marketing: boolean;
  marketing2: boolean;
  weeklytips: boolean;
  newfeatures: boolean;
  confirm: boolean;
  multiSelect: string[];
  singleSelect: string;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const mapSubmitHandler = useCallback((data) => onSubmit(data), [onSubmit]);
  const Items = [
    { key: 0, label: 'Duplicate' },
    { key: 1, label: 'Delete', type: 'highlight' },
  ];

  const MultiItems = [
    { key: 0, label: 'Label1' },
    { key: 1, label: 'Label2' },
    { key: 2, label: 'Label3' },
  ];

  return (
    <form onSubmit={handleSubmit(mapSubmitHandler)}>
      <TwoColumnGrid>
        <FormInput
          fillWidth
          label='Firstname *'
          name='firstname'
          ref={register({ required: true })}
          error={errors.firstname && 'First name is required.'}
        />
        <FormInput
          fillWidth
          label='Lastname *'
          name='lastname'
          ref={register({ required: true })}
          error={errors.lastname && 'Last name is required.'}
        />
        <Label title='Marketing 2'>
          <Toggle
            name='weeklytips'
            label='Send me weekly tips to help me improve the engagement on my store'
            ref={register({})}
          />
        </Label>
        <FormInput
          fillWidth
          label='Phone Number'
          name='phone'
          ref={register({})}
        />
        <FormInput
          fillWidth
          label='E-Mail *'
          name='email'
          type='email'
          ref={register({ required: true })}
          error={errors.email && 'E-Mail is required.'}
        />
        <Select
          label='Single Select'
          items={Items}
          type='single'
          ref={register({})}
          name='singleSelect'
        />
        <Select
          label='Multi Select'
          items={MultiItems}
          type='multi'
          ref={register({})}
          name='multiSelect'
        />
        <Checkbox
          label='Confirm'
          name='confirm'
          ref={register({})}
        />
        <Button size='big' type='submit'>Submit</Button>
      </TwoColumnGrid>
    </form>
  );
};

export const normal = () => (
  <Form onSubmit={action('submit')} />
);
