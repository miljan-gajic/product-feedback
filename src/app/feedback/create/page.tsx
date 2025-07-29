import Form from '@/components/Form/Form';
import { SecondaryNav } from '@/components/SecondaryNav/SecondaryNav';
import React from 'react';

export default async function CreateFeedbackPage() {
  return (
    <>
      <SecondaryNav showEditButton={false} />
      <Form />
    </>
  );
}
