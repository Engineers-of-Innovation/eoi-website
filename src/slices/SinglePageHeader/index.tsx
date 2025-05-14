import { mergeClassNames } from "@/utils/helpers/mergeClassNames";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { useMemo } from "react";

export type SinglePageHeaderProps =
  SliceComponentProps<Content.SinglePageHeaderSlice>;

const SinglePageHeader = ({ slice }: SinglePageHeaderProps) => {
  const colorForTag = useMemo(() => {
    switch (slice.primary.tag_color) {
      case "Bleek Lime":
        return "bg-bleek-lime-500";
      case "EHBOrange":
        return "bg-ehbo-orange-500";
      case "Tidal Turqoise":
        return "bg-tidal-turquoise-500";
      default:
        return "bg-lake-lime-500";
    }
  }, [slice.primary.tag_color]);

  return (
    <section
      className={mergeClassNames(
        "w-full max-w-[1440px] mx-auto h-[672px] bg-lake-lime-500 pl-32 pt-24 flex items-center justify-between relative rounded-b-[60px]",
        "desktop-s:pl-10 desktop-s:h-auto",
        "tablet-l:px-4 tablet-l:flex-col",
      )}
    >
      <header className="flex gap-4 flex-col desktop-s:pb-20">
        <p className="text-heading-xl font-heading text-off-white-500">
          {slice.primary.eyebrow}
        </p>
        <h1 className="text-heading-4-xl text-off-white-500 font-heading">
          {slice.primary.title}
        </h1>
        <p
          className={mergeClassNames(
            "text-heading-l font-heading text-lake-lime-500 px-4 leading-none inline-flex w-max py-3 rounded-full rounded-bl-none",
            colorForTag,
          )}
        >
          {slice.primary.tag}
        </p>
      </header>

      <aside
        className={mergeClassNames(
          "w-full h-full flex items-center justify-center relative",
          "tablet-l:hidden",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={mergeClassNames("absolute top-0 right-0 h-full w-full")}
          width="810"
          height="583"
          viewBox="0 0 810 583"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <clipPath id="clipping">
              <path
                d="M884.581 128.417C845.224 138.457 815.781 166.255 797.101 186.298C782.136 202.325 769.804 224.881 755.472 250.981C752.027 257.284 748.483 263.69 744.809 270.301C723.273 308.71 694.477 356.359 643.959 418.611L645.343 419.529C686.855 447.322 726.368 463.517 762.848 467.627C793.475 471.104 822.362 466.081 848.699 452.709C884.562 434.505 915.517 401.553 943.308 352.034C956.27 328.961 967.529 306.83 978.403 285.449C981.932 278.537 985.363 271.728 988.83 265.02C1002.38 238.732 1017.52 210.391 1036.75 181.199L1035.85 180.372C983.805 133.552 932.893 116.086 884.546 128.384L884.581 128.417Z"
                fill="#B9FF25"
              />
              <path
                d="M577.895 417.678C616.841 372.639 692.908 249.106 727.679 190.048L727.744 189.945C676.048 142.141 623.175 123.699 570.662 135.063C522.465 145.504 485.908 178.256 463.727 203.895C442.663 228.231 424.997 259.789 406.266 293.222L399.269 305.662C376.953 345.231 352.166 387.309 316.436 428.612L316.338 428.749C385.984 472.172 441.562 489.148 486.289 480.66C527.373 472.847 555.126 444.07 577.93 417.711L577.895 417.678Z"
                fill="#B9FF25"
              />
              <path
                d="M361.903 254.794C376.236 228.728 386.638 209.749 401.005 193.024L400.273 192.33C363.843 158.574 327.011 138.923 290.812 133.965C261.083 129.897 231.575 135.741 203.064 151.313C166.807 171.109 131.434 207.246 100.799 255.806C71.6867 301.91 27.6791 385.018 8.27905 430.368L9.35748 431.292C20.7668 441.028 62.2758 473.34 117.33 480.511C169.389 487.3 213.552 468.773 248.58 425.459C299.714 362.252 329.058 313.614 348.886 278.272C353.69 269.718 357.973 261.915 361.935 254.726L361.903 254.794Z"
                fill="#B9FF25"
              />
            </clipPath>
          </defs>
        </svg>

        <div
          className={mergeClassNames(
            "[clip-path:url(#clipping)] w-auto flex items-center justify-center h-full relative",
          )}
        >
          <PrismicImage
            field={slice.primary.image}
            className=" object-cover min-h-[400px]"
          />
        </div>
      </aside>
    </section>
  );
};

export default SinglePageHeader;
