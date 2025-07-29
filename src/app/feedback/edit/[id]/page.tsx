import { getProductFeedbackById } from '@/app/api/productFeedback';
import Form from '@/components/Form/Form';
import { SecondaryNav } from '@/components/SecondaryNav/SecondaryNav';
import React from 'react';

export default async function EditFeedbackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { description, status, title, upvotes } =
    (await getProductFeedbackById(id)) || {};

  return (
    <>
      <SecondaryNav showEditButton={false} />
      <Form
        formType="edit"
        editingFields={{ description, status, title, upvotes }}
      />
    </>
  );
}
