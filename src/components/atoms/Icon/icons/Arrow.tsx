import { IconProps } from "../Icon";

export function Arrow({
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.34724 8.56274L9.37444 0.757373L1.56907 0.78457M8.83051 1.3013L0.889157 9.24265" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
