import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { mergeClassNames } from "@/utils/helpers/mergeClassNames";
import CustomPrismicRichText from "@/components/molecules/CustomPrismicRichText";
import Input from "@/components/atoms/Input/Input";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import TextArea from "@/components/atoms/Textarea/Textarea";
import { Button } from "@/components/atoms/Button";
import { IconRotate } from "@/components/atoms/Icon/Icon.types";
import Icon from "@/components/atoms/Icon/Icon";
import Select from "@/components/atoms/Select/Select";
import Script from "next/script";

export type SignUpFormProps = SliceComponentProps<Content.SignUpFormSlice>;

const SignUpForm = ({ slice }: SignUpFormProps) => {
  return (
    <section
      className={mergeClassNames(
        "bg-off-white-500 flex gap-16 max-w-7xl mx-auto py-12 px-4 items-center justify-center",
        "desktop-l:gap-2",
        "desktop-s:gap-10 desktop-s:flex-col",
        "tablet-s:flex-col tablet-s:px-4",
      )}
    >
      <Script src="https://unpkg.com/@botpoison/browser" async />
      <div
        className={mergeClassNames(
          "bg-off-white-100 rounded-[40px] border-b-[10px] border-b-lake-lime-50 px-20 py-16 max-w-[798px] w-full tablet-s:px-6",
        )}
      >
        <CustomPrismicRichText field={slice.primary.description} />

        <form
          acceptCharset="UTF-8"
          action="https://submit-form.com/jHi4TGLGi"
          data-botpoison-public-key="pk_0842adcf-4510-42f2-9282-0006505747ff"
          method="POST"
          className="py-10 flex flex-col gap-6"
        >
          <h4 className="text-heading-l mb-2">Join us</h4>

          <div className="flex gap-4 tablet-l:flex-col">
            <Input
              id="name"
              name="name"
              required
              placeholder="Your first name"
              label="Name"
            />

            <Input
              id="lastname"
              name="lastname"
              required
              placeholder="Your last name"
              label="Lastname"
            />
          </div>

          <div className="flex gap-4">
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email address"
              label="Email address"
            />
          </div>

          <div className="flex gap-4">
            <TextArea
              id="reason"
              required
              name="reason"
              isFullWidth
              placeholder="Why do you want to join us?"
              label="Why do you want to join us?"
            />
          </div>

          <div className="flex gap-4">
            <Input
              id="study"
              name="study"
              required
              label="Study"
              placeholder="Your study"
            />

            <Input
              id="referred_by"
              name="referred_by"
              required
              label="Referred by"
              placeholder="The person who referred you"
            />
          </div>

          <hr className="h-[1px] bg-lake-lime-50 border-none my-10" />

          <h4 className="text-heading-l mb-2">Personal details</h4>

          <div className="flex gap-4">
            <Input
              id="birthdate"
              name="birthdate"
              required
              type="date"
              label="Date of birth"
              placeholder="Your date of birth"
            />

            <Input
              id="phone"
              name="phone"
              required
              type="tel"
              label="Phone number"
              placeholder="Your phone number"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Input
              id="street"
              name="street"
              required
              label="Street address"
              placeholder="Your street address"
            />
          </div>

          <div className="flex gap-4">
            <Input
              id="zipcode"
              name="zipcode"
              required
              isFullWidth
              label="Zipcode"
              placeholder="Your zipcode"
            />

            <Input
              id="city"
              name="city"
              required
              label="City"
              placeholder="Enter your city"
            />
          </div>

          <hr className="h-[1px] bg-lake-lime-50 border-none my-10" />

          <h4 className="text-heading-l mb-2">Bank details</h4>

          <div className="flex flex-col gap-4">
            <Input
              id="bank_number"
              name="bank_number"
              required
              label="Bank card number / IBAN"
              placeholder="Your bank card number / IBAN"
            />
          </div>

          <div className="flex gap-4">
            <Input
              id="cardholder_name"
              name="cardholder_name"
              required
              label="Cardholder name"
              placeholder="Your cardholder name"
            />
          </div>

          <div className="flex gap-4">
            <Select
              label="Write-off period"
              name="write-off-period"
              id="write-off-period"
              className="w-full"
            >
              <option value="anually">Anually</option>
              <option value="bi-annually">Bi-annually</option>
              <option value="quarterly">Quarterly</option>
            </Select>
          </div>

          <div className="flex flex-col gap-4">
            <Checkbox
              id="terms"
              name="terms"
              required
              label="I accept the terms and conditions"
            />

            <div className="opacity-60 text-body-xs mt-4">
              <PrismicRichText
                field={slice.primary.terms_and_conditions}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-body-xs font-body leading-normal mb-4 text-lake-lime-400">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </div>

          <Button
            variant="primary"
            size="l"
            className="w-auto mx-auto"
            type="submit"
          >
            Submit
            <Icon name="arrow" direction={IconRotate.South} />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
