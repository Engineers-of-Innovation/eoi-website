import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { mergeClassNames } from "@/utils/helpers/mergeClassNames";
import CustomPrismicRichText from "@/components/molecules/CustomPrismicRichText";
import Input from "@/components/atoms/Input/Input";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import TextArea from "@/components/atoms/Textarea/Textarea";

export type SignUpFormProps = SliceComponentProps<Content.SignUpFormSlice>;

const SignUpForm = ({ slice }: SignUpFormProps) => {
  return (
    <section
      className={mergeClassNames(
        "bg-off-white-500 flex gap-16 max-w-7xl mx-auto py-12 px-16 items-center justify-center",
        "desktop-l:gap-2",
        "desktop-s:gap-10 desktop-s:flex-col",
        "tablet-s:flex-col tablet-s:px-4",
      )}
    >
      <div
        className={mergeClassNames(
          "bg-off-white-100 rounded-[40px] border-b-[10px] border-b-lake-lime-50 px-20 py-16 max-w-[774px] w-full tablet-s:px-4",
        )}
      >
        <CustomPrismicRichText field={slice.primary.description} />

        <form
          action="https://formkeep.com/f/e4caf886b437"
          accept-charset="UTF-8"
          encType="multipart/form-data"
          method="POST"
          className="py-10 flex flex-col gap-6"
        >
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
              className="w-full"
              placeholder="Your email address"
              label="Email address"
            />
          </div>

          <div className="flex gap-4">
            <TextArea
              id="reason"
              required
              className="w-full"
              name="reason"
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

          <hr />

          <h4>Personal details</h4>

          <div className="flex gap-4">
            <Input
              id="birthdate"
              name="birthdate"
              required
              label="Date of birth"
              placeholder="Your date of birth"
            />

            <Input
              id="phone"
              name="phone"
              required
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
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <Input
              id="zipcode"
              name="zipcode"
              required
              label="Zipcode"
              placeholder="Your zipcode"
            />

            <Input
              id="city"
              name="city"
              required
              label="City"
              placeholder="Enter your city"
              className="w-full"
            />
          </div>

          <hr />

          <h4>Bank details</h4>

          <div className="flex flex-col gap-4">
            <Input
              id="bank_number"
              name="bank_number"
              required
              label="Bank card number / IBAN"
              placeholder="Your bank card number / IBAN"
              className="w-full"
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
            <select
              name="write-off-period"
              id="write-off-period"
              className="w-full"
            >
              <option value="anually">Anually</option>
              <option value="bi-annually">Bi-annually</option>
              <option value="quarterly">Quarterly</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <Checkbox
              id="terms"
              name="terms"
              required
              label="I accept the terms and conditions"
            />

            <div className="opacity-60 text-body-s">
              <CustomPrismicRichText
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
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
