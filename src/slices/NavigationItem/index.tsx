import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'

/**
 * Props for `Navigation`.
 */
export type NavigationProps = SliceComponentProps<Content.NavigationSlice>

/**
 * Component for "NavigationItem" Slices.
 */
const NavigationItem = ({ slice }: NavigationProps): JSX.Element => {
  return (
    <li className={'font-heading'}>
      <PrismicLink
        className="text-heading-6-xl text-lake-lime-900 hover:text-lake-lime-700"
        field={slice.primary.link}
      >
        {slice.primary.title}

        {slice.items && (
          <ul>
            {slice.items.map((item, idx) => (
              <li key={idx}>
                <PrismicLink
                  className="text-heading-6-xl text-lake-lime-900 hover:text-lake-lime-700"
                  field={item.child_link}
                >
                  {item.child_title}
                </PrismicLink>
              </li>
            ))}
          </ul>
        )}
      </PrismicLink>
    </li>
  )
}

export default NavigationItem
