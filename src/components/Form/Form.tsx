import Image from 'next/image';

import { InputField } from './InputField/InputField';
import { DropdownField } from './DropdownField/DropdownField';
import TextAreaField from './TextAreaField/TextAreaField';
import Button from '../Button/Button';
import plusIcon from '../../../public/assets/icons/icon-plus.svg';
import editIcon from '../../../public/assets/icons/icon-edit-feedback.svg';
import { ProductRequest } from '@/types/productRequest';

type FormProps = {
  formType?: 'create' | 'edit';
  editingFields?: Partial<ProductRequest>;
};

function Form({ formType, editingFields }: FormProps) {
  return (
    <form className="bg-white rounded-xl px-8 py-10 w-[640px] mt-14 relative">
      {formType === 'edit' ? (
        <Image
          src={editIcon}
          alt="Edit Request Icon"
          width={56}
          height={56}
          className="absolute top-[-1.6rem]"
        />
      ) : (
        <div className="absolute top-[-1.6rem] w-[56px] h-[56px] rounded-full bg-gradient-to-br from-radial-3 via-radial-2 to-radial-1 flex justify-center items-center">
          <Image src={plusIcon} alt="Plus Icon" width={16} height={16} />
        </div>
      )}
      <h1 className="text-2xl font-bold text-secondary-text mb-10">
        {formType == 'edit'
          ? `Editing ${editingFields?.title}`
          : 'Create New Feedback'}
      </h1>
      <InputField
        label="Feedback Title"
        description="Add a short, descriptive headline"
        cs="mb-8"
        value={editingFields?.title}
      />
      <DropdownField
        label="Category"
        description="Choose a category for your feedback"
        options={[
          { label: 'Feature', value: 'feature' },
          { label: 'Enhancement', value: 'enhancement' },
          { label: 'Bug', value: 'bug' },
        ]}
        cs="mb-8"
      />
      {formType === 'edit' && (
        <DropdownField
          label="Update Status"
          description="Change feedback state"
          options={[
            { label: 'Planned', value: 'planned' },
            { label: 'In-Progress', value: 'in_progress' },
            { label: 'Live', value: 'live' },
          ]}
          cs="mb-8"
        />
      )}
      <TextAreaField
        label="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
        cs="mb-8"
        rows={4}
        value={editingFields?.description}
      />
      <div className="flex justify-between items-center">
        <div>
          {formType === 'edit' && (
            <Button variant="error" size="md">
              Delete
            </Button>
          )}
        </div>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            size="md"
            className="bg-secondary-text hover:bg-secondary-text-hover"
          >
            Cancel
          </Button>
          <Button variant="primary" size="md">
            Add Feedback
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
