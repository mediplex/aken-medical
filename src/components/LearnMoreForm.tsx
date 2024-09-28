'use client';

import { learnMoreFormAction } from '@/actions';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import {
  FaEnvelope,
  FaUser,
  FaStethoscope,
  FaFlaskVial,
  FaSackDollar,
  FaBook,
} from 'react-icons/fa6';

import { IconCheckbox, Step, TextInput, TwoStepForm } from '@/components';

const LearnMoreForm: React.FC = () => {
  const searchParams = useSearchParams();
  const currentStep: number =
    parseInt(searchParams?.get('step') as string) || 1;

  return (
    <TwoStepForm form="learn-more" action={learnMoreFormAction}>
      {/* Slide 1 */}
      <Step index={1} currentStep={currentStep}>
        <h3 className="mb-4 text-xl text-teal-950">
          Tell us a little be about yourself to personalize{' '}
          <strong>your report</strong>.
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <IconCheckbox Icon={FaStethoscope} name="doctor" label="Doctor" />
          <IconCheckbox Icon={FaFlaskVial} name="scientist" label="Scientist" />
          <IconCheckbox Icon={FaSackDollar} name="investor" label="investor" />
          <IconCheckbox Icon={FaBook} name="other" label="Other" />
        </div>
      </Step>

      {/* Slide 2 */}
      <Step index={2} currentStep={currentStep}>
        <h3 className="text-xl text-teal-950">
          Where do you want to receive the full report about the project?
        </h3>
        <TextInput
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
          Icon={FaUser}
        />
        <TextInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          Icon={FaEnvelope}
        />
      </Step>
    </TwoStepForm>
  );
};

export { LearnMoreForm };
