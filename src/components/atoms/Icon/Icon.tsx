import { iconComponents, type IconRotate } from './Icon.types'


export interface IconProps {
  color?: string
  className?: string
  direction?: IconRotate
  'aria-label'?: string
  size?: number
  width?: number
  height?: number
}

export type TIconName = keyof typeof iconComponents

function isIconName(name: string | TIconName): name is TIconName {
  return Object.keys(iconComponents).includes(name as string);
}

export const iconElements = ({
  size,
  direction,
  ...props
}: IconProps) => {
  const result = {} as Record<TIconName, JSX.Element>

  for (const [name, Component] of Object.entries(iconComponents)) {
    if (isIconName(name)) {
      result[name] = (
        <Component
          {...props}
          {...size && {
            width: size,
            height: size
          }}
          {...direction && {
            style: {
              transform: `rotate(${direction})`
            }
          }}
        />
      )
    }
  }

  return result
}

const Icon: React.FC<IconProps & { name: TIconName }> = ({
  name,
  ...props
}) => {
  return (
    <>
      {iconElements(props)[name]}
    </>
  )
}

export default Icon
